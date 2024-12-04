const db = require("../models");
const User = db.user;

exports.findAll = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "nickname", "email", "blocked"], // Adjust fields as needed
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send({ message: "Error retrieving users", error: error.message });
  }
};
