const VehicleModel = require("../models/VehicleModel");

const getAllVehicles = (req, res) => {
  VehicleModel.findAll()
    .then(([vehicles]) => {
      res.status(200).send(vehicles);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal server error");
    });
};

// Get vehicles by id

const getVehiclesById = (req, res) => {
  const id = parseInt(req.params.id, 10);

  VehicleModel.findVehicleById(id)
    .then(([vehicle]) => {
      if (vehicle[0] != null) {
        res.status(200).send(vehicle);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).send("Error retrieving data from database");
    });
};

module.exports = {
  getAllVehicles,
  getVehiclesById,
};
