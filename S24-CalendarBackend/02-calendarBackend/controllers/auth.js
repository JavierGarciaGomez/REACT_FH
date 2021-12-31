// 333, 335 express validator and error handling
const { response } = require("express");
const { validationResult } = require("express-validator");
const userLogin = (req, res = response) => {
  const { email, password } = req.body;

  res.json({
    ok: true,
    msg: "login",
    email,
    password,
  });
};

const userRenewToken = (req, res = response) => {
  res.json({
    ok: "renew token",
  });
};

const userCreate = (req, res = response) => {
  const { name, email, password } = req.body;

  // error handling
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: "ERROR",
      errors,
    });
  }
  res.status(201).json({
    ok: "new user",
  });
};

module.exports = {
  userLogin,
  userRenewToken,
  userCreate,
};
