const db = require("../models");
const User = db.user;

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "username", "email", "blocked"], // Adjust fields as needed
    });
    res.status(200).json(users);
  } catch (err) {
    console.error("Error fetching users:", err.message);
    res.status(500).send({ message: "Error fetching users." });
  }
};

// Get a specific user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
      attributes: ["id", "username", "email", "blocked"],
    });
    if (!user) {
      return res.status(404).send({ message: "User not found." });
    }
    res.status(200).json(user);
  } catch (err) {
    console.error("Error fetching user:", err.message);
    res.status(500).send({ message: "Error fetching user." });
  }
};

// Delete a user by ID
exports.deleteUser = async (req, res) => {
  try {
    const result = await User.destroy({
      where: { id: req.params.id },
    });
    if (result === 0) {
      return res.status(404).send({ message: "User not found." });
    }
    res.status(200).send({ message: "User deleted successfully." });
  } catch (err) {
    console.error("Error deleting user:", err.message);
    res.status(500).send({ message: "Error deleting user." });
  }
};

// Block a user
exports.blockUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).send({ message: "User not found." });
    }
    user.blocked = true;
    await user.save();
    res.status(200).send({ message: `User ${user.username} has been blocked.` });
  } catch (err) {
    console.error("Error blocking user:", err.message);
    res.status(500).send({ message: "Error blocking user." });
  }
};

// Unblock a user
exports.unblockUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).send({ message: "User not found." });
    }
    user.blocked = false;
    await user.save();
    res.status(200).send({ message: `User ${user.username} has been unblocked.` });
  } catch (err) {
    console.error("Error unblocking user:", err.message);
    res.status(500).send({ message: "Error unblocking user." });
  }
};

// Find all users (alternative function, if needed)
exports.findAll = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "username", "email", "blocked"], // Adjust fields as needed
    });
    res.status(200).json(users);
  } catch (error) {
    console.error("Error retrieving users:", error.message);
    res.status(500).send({ message: "Error retrieving users." });
  }
};
