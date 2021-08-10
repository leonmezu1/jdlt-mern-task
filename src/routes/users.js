// Routes for creating users
const express = require("express");
const userController = require("../controllers/userController");
const { check } = require("express-validator");

const router = express.Router();

router.post(
  "/",
  [
    check("name", "Name is required").not().notEmpty(),
    check("email", "Valid email is required").not().notEmpty(),
    check("password", "Valid password is required").not().notEmpty(),
    check("password", "Password length error").isLength({
      min: 6,
      max: 200,
    }),
  ],
  userController.createUser // Important not to call the function with () because it will make the request fail
);

module.exports = router;
