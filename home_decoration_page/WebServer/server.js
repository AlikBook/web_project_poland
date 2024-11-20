const express = require("express");
const cors = require("cors");
const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync()
  .then(() => {
    console.log("Database synchronized successfully.");
  })
  .catch((err) => {
    console.error("Failed to synchronize the database:", err.message);
  });

// // simple route
// app.get("/", (req, res) => {
//  res.json({ message: "Welcome to Home Decorations - Your Server lives!!!"});
// });
// app.listen(5000, () => {
//  console.log("Server has started!")
// }) 