const User = require("../models/User");

exports.createUser = async (req, res) => {
  try {
    let user;
    user = new User(req.body);
    await user.save();
    res.status(201).send("User created");
  } catch (err) {
    console.log(err);
    res.status(400).send("Error");
  }
};
