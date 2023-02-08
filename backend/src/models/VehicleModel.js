const db = require("../connection");

const table = "vehicle";

// Requête pour récupérer tous les véhicules

const findAll = () => {
  return db.query(`SELECT * FROM ${table}`);
};

// Requête pour trouver un véhicule selon son id
const findVehicleById = (id) => {
  return db.query(`SELECT * FROM ${table} WHERE id_vehicle=?`, [id]);
};

// A CONTINUER SUR LE CONTROLLER !!!!!!!!!!!!!!!!!!!!!
const findVehicleByCompanyId = () => {
  return db.query(
    `SELECT id_vehicle, type, model, company.id_company, company.name FROM ${table} INNER JOIN company ON vehicle.id_company = company.id_company`
  );
};

const findVehiclesAndLoans = () => {
  return db.query(
    `SELECT * FROM vehicle 
    LEFT JOIN loan 
    ON vehicle.id_vehicle = loan.id_vehicle `
  );
};

//  Requête pour chercher la date d'emprunt et de retour
const findDatesOfBorrowing = (id) => {
  return db.query(
    `SELECT * FROM vehicle 
    INNER JOIN loan 
    ON vehicle.id_vehicle = loan.id_vehicle 
    WHERE vehicle.id_vehicle=?`,
    [id]
  );
};

module.exports = {
  findAll,
  findVehicleById,
  findDatesOfBorrowing,
  findVehicleByCompanyId,
  findVehiclesAndLoans,
};
