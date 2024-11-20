const express = require("express");
const cors = require("cors");
const db = require("./app/models");
const productRoutes = require("./app/routes/productRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test database connection and sync
db.sequelize
  .sync({ force: false }) // Set force: true to reset database on every run
  .then(() => {
    console.log("Database synchronized successfully!");
  })
  .catch((err) => {
    console.error("Error syncing database:", err.message);
  });

// Import and use routes
require("./app/routes/productRoutes")(app);

// Simple route for testing
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Home Decoration API!" });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});