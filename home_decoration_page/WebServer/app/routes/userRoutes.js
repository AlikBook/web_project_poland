const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { authJwt } = require("../middleware"); // Authentication middleware

// Public: Get all users (Admin-only)
router.get("/", [authJwt.verifyToken, authJwt.isAdmin], userController.findAll);

module.exports = router;
