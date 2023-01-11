const db = require("../connection");

// Requête pour récupérer les utilisateurs

const getAllUsers = () => {
  return db.query(`SELECT * FROM user`);
};

// Requête pour s'inscrire

const postUser = async (req) => {
  const { firstname, lastname, email, password, typeOfLicense } = req.body;

  const request = await db.query(
    `INSERT INTO user(firstname, lastname, email, password, type_of_license) VALUES (?, ?, ?, ?, ?)`,
    [firstname, lastname, email, password, typeOfLicense]
  );

  return request;
};

module.exports = {
  getAllUsers,
  postUser,
};
