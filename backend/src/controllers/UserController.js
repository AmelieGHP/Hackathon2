const jwt = require("jsonwebtoken");
const UserModel = require("../models/UserModel");

const welcome = (req, res) => {
  res.send("Welcome ! This is our website 😊 !");
};

const getUsers = (req, res) => {
  UserModel.getAllUsers()
    .then(([users]) => {
      res.status(200).send(users);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const signInUser = (req, res) => {
  UserModel.postUser(req)
    .then((result) => {
      const payload = { sub: result.insertId };
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      const id_user = result[0].insertId;
      res
        .location(`/users/${result.insertId}`)
        .send({ id_user, token, user: req.body })
        .status(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error saving the user");
    });
};

module.exports = {
  welcome,
  getUsers,
  signInUser,
};
