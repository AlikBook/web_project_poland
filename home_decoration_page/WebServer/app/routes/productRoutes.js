module.exports = function (app) {
    const productController = require("../controllers/productController");
  
    // Test server route
    app.get("/", (req, res) => {
      res.json({ message: "Welcome to the Product Management API!" });
    });
  
    // Create a new product
    app.post("/api/products", productController.create);
  
    // Retrieve all products
    app.get("/api/products", productController.findAll);
  
    // Retrieve a single product by ID
    app.get("/api/products/:id", productController.findOne);
  
    // Retrieve products by title
    app.get("/api/products/search/:title", productController.findByTitle);
  
    // Update a product by ID
    app.put("/api/products/:id", productController.update);
  
    // Delete a product by ID
    app.delete("/api/products/:id", productController.delete);
  
    // Delete all products
    app.delete("/api/products", productController.deleteAll);
  };
  