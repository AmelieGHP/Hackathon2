const UserModel = require("../models/UserModel");

const getUsers = (req, res) => {
  UserModel.getAllUsers()
    .then(([[users]]) => {
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
      res.location(`/users/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error saving the user");
    });
};

module.exports = {
  getUsers,
  signInUser,
};
