const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const verifySignUp = require("../middleware/verifySignUp");

// Registration route with middleware
router.post(
  "/register",
  [verifySignUp.checkDuplicateUsernameOrEmail, verifySignUp.checkRolesExisted],
  authController.register
);

// Login route
router.post("/login", authController.signin);

module.exports = router;
