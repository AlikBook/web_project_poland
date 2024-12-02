module.exports = function (app) {
  const productController = require("../controllers/productController");
  const { authJwt } = require("../middleware"); // Import authJwt middleware

  // Test server route (public route)
  app.get("/", (req, res) => {
    res.json({ message: "Welcome to the Product Management API!" });
  });

  // Protected: Create a new product (authenticated users only)
  app.post("/api/products", [authJwt.verifyToken], productController.create);

  // Public: Retrieve all products
  app.get("/api/products", productController.findAll);

  // Public: Retrieve a single product by ID
  app.get("/api/products/:id", productController.findOne);

  // Public: Retrieve products by title
  app.get("/api/products/search/:title", productController.findByTitle);

  // Protected: Update a product by ID (authenticated users only)
  app.put("/api/products/:id", [authJwt.verifyToken], productController.update);

  // Admin-only: Delete a product by ID
  app.delete(
    "/api/products/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    productController.delete
  );

  // Admin-only: Delete all products
  app.delete(
    "/api/products",
    [authJwt.verifyToken, authJwt.isAdmin],
    productController.deleteAll
  );
};

  