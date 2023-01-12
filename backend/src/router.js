const express = require("express");

const router = express.Router();
const { hashPassword, verifyPassword, verifyToken } = require("./auth");

// Import des controllers :

const vehicleController = require("./controllers/VehicleController");
const userController = require("./controllers/UserController");
const loanController = require("./controllers/LoanController");
const userModel = require("./models/UserModel");

// Route pour authoriser le log si le token existe

router.get("/verif", verifyToken, userController.welcome);

// Route pour récupérer tous les véhicules

router.get("/vehicles", vehicleController.getAllVehicles);
router.get("/vehicles/:id", vehicleController.getVehiclesById);

router.get("/users", userController.getUsers);

router.get("/loan/:id", loanController.getLoanByVehicleId);
router.post("/postLoan", loanController.postLoan);

// Route pour la création d'un utilisateur

router.post("/signin", hashPassword, userController.signInUser);

// ROUTES PROTEGEES /!\

// Route pour se logger :

router.post(
  "/login",
  userModel.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

module.exports = router;
