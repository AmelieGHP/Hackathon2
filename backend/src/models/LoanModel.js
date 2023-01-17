const db = require("../connection");

const table = "loan";

const findLoanByVehicleId = (id) => {
  return db.query(`SELECT * FROM ${table} WHERE id_vehicle=?`, [id]);
};

const allLoans = () => {
  return db.query(`SELECT * FROM ${table}`);
};

const findLoanByUserId = (id) => {
  return db.query(
    `SELECT id_loan, borrowing_date, return_date, id_user, vehicle.id_vehicle, vehicle.model, vehicle.type, vehicle.image 
    FROM ${table} 
    INNER JOIN vehicle 
    ON loan.id_vehicle=vehicle.id_vehicle
    WHERE id_user=?`,
    [id]
  );
};

const postLoan = async (req) => {
  const { id_user_forSure, id, borrowingDate, returnDate } = req.body;

  const request = await db.query(
    `INSERT INTO loan(id_user, id_vehicle, borrowing_date, return_date) VALUES (?, ?, ?, ?)`,
    [id_user_forSure, id, borrowingDate, returnDate]
  );

  return request;
};

const deleteLoan = async (req) => {
  const { id_loan } = req.query;
  console.warn(req.query)
  const deleteFromLoan = await db.query('DELETE FROM loan WHERE id_loan = ?', [id_loan]);

  return deleteFromLoan;
}

module.exports = {
  findLoanByVehicleId,
  postLoan,
  allLoans,
  findLoanByUserId,
  deleteLoan
};
