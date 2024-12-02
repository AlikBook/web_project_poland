const express = require("express");
const cors = require("cors");
const db = require("./app/models"); //Import models
const Role=db.role; //Access the Role Model
const productRoutes = require("./app/routes/productRoutes");
const authRoutes = require("./app/routes/authRoutes"); // Import the routes

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/auth", authRoutes); // Use the routes with the "/auth" base path


// Define the initial function to seed the roles
function initial() {
  Role.create({ id: 1, name: "user" });
  Role.create({ id: 2, name: "admin" });
}

// Test database connection and sync
db.sequelize
  .sync({ force: true }) // Set force: true to reset database on every run
  .then(() => {
    console.log("Database synchronized successfully!");
  })
  .catch((err) => {
    console.error("Error syncing database:", err); // Log full error
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