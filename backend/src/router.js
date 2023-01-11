const express = require("express");

const router = express.Router();

// Controllers :

const vehicleController = require("./controllers/VehicleController");
const userController = require("./controllers/UserController");

// Route pour récupérer tous les véhicules

router.get("/vehicles", vehicleController.getAllVehicles);
router.get("/users", userController.getUsers);

// Route pour la création d'un utilisateur

router.post("/users", userController.signInUser);

module.exports = router;
