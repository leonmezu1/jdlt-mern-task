// Routes for creating users
const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.post("/", (req, res) => {
  userController.createUser(req, res); // Important not to call the function with () because it will make the request fail
});

module.exports = router;
