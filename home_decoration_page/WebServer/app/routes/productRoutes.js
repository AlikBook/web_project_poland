const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const { authJwt } = require("../middleware"); // Import authentication middleware

// Public: Retrieve all products
router.get("/", productController.findAll);

// Public: Retrieve a single product by ID
router.get("/:id", productController.findOne);

// Public: Search products by title
router.get("/search/:title", productController.findByTitle);

// Protected: Create a new product (authenticated users only)
router.post("/", [authJwt.verifyToken], productController.create);

// Protected: Update a product by ID (authenticated users only)
router.put("/:id", [authJwt.verifyToken], productController.update);

// Admin-only: Delete a product by ID
router.delete("/:id", [authJwt.verifyToken, authJwt.isAdmin], productController.delete);

// Admin-only: Delete all products
router.delete("/", [authJwt.verifyToken, authJwt.isAdmin], productController.deleteAll);

module.exports = router;
