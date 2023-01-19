const LoanModel = require("../models/LoanModel");

const getAllLoans = (req, res) => {
  LoanModel.allLoans()
    .then(([loan]) => {
      res.status(200).send(loan);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getLoansByUserId = (req, res) => {
  const id = parseInt(req.params.id, 10);
  console.warn(id);

  LoanModel.findLoanByUserId(id)
    .then(([user]) => {
      if (user[0] != null) {
        console.log(user)
        res.status(200).send(user);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error(err);
    });
};

const getLoanByVehicleId = (req, res) => {
  const id = parseInt(req.params.id, 10);

  LoanModel.findLoanByVehicleId(id)
    .then(([loan]) => {
      if (loan[0] != null) {
        res.status(200).send(loan);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).send("Error retrieving data from database");
    });
};

const postLoan = (req, res) => {
  LoanModel.postLoan(req)
    .then((result) => {
      console.warn(result);
      res.send({ loan: req.body }).status(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error saving the reservation");
    });
};

const deleteLoan = (req, res) => {
  LoanModel.deleteLoan(req).then((result) => {
    console.warn(result);
    res.sendStatus(200)
  }).catch((err) => {
    console.error(err);
    res.status(500).send("Error canceling the reservation");
  });
};

module.exports = {
  getAllLoans,
  getLoanByVehicleId,
  getLoansByUserId,
  postLoan,
  deleteLoan
};
