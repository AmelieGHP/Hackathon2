const db = require("../connection");

// Requête pour récupérer les utilisateurs

const getAllUsers = () => {
  return db.query(`SELECT * FROM user`);
};

// Requête pour s'inscrire

const postUser = async (req) => {
  const { firstname, lastname, email, password, phone, typeOfLicense } = req.body;

  const request = await db.query(
    `INSERT INTO user(firstname, lastname, email, password, phone, type_of_license) VALUES (?, ?, ?, ?, ?, ?)`,
    [firstname, lastname, email, password, phone, typeOfLicense]
  );

  return request;
};

// Post a user that try to log his account
const getUserByEmailWithPasswordAndPassToNext = (req, res, next) => {
  const { email } = req.body;

  db.query("SELECT * FROM user WHERE email = ?", [email])
    .then(([users]) => {
      if (users[0] != null) {
        // eslint-disable-next-line prefer-destructuring
        req.user = users[0];

        next();
      } else {
        res.sendStatus(401);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

// Requête pour se connecter

module.exports = {
  getAllUsers,
  postUser,
  getUserByEmailWithPasswordAndPassToNext,
};
