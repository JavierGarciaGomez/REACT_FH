// 336
const { response } = require("express");
const { validationResult } = require("express-validator");

const fieldValidator = (req, res = response, next) => {
  console.log("field validator im here");
  // 335 error handling
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: "ERROR",
      errors,
    });
  }

  next();
};

module.exports = { fieldValidator };
