const db = require("../connection");

const table = "loan";

const findLoanByVehicleId = (id) => {
  return db.query(`SELECT * FROM ${table} WHERE id_vehicle=?`, [id]);
};

const postLoan = async (req) => {
  const { id_user, id, borrowingDate, returnDate } = req.body;

  const request = await db.query(
    `INSERT INTO loan(id_user, id_vehicle, borrowing_date, return_date) VALUES (?, ?, ?, ?)`,
    [id_user, id, borrowingDate, returnDate]
  );

  return request;
};

module.exports = {
  findLoanByVehicleId,
  postLoan,
};
