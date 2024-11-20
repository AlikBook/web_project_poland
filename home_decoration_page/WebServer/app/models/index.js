const dbConfig = require("../config/db.js");
const Sequelize = require("sequelize");

// Initialize Sequelize with database configuration
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  //operatorsAliases: false, // Optional: Explicitly disable alias operators
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
  logging: false, // Disable logging
  
});

// Create the db object
const db = {};

// Add Sequelize and sequelize to the db object
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import and initialize models
db.events = require("./eventModel.js")(sequelize, Sequelize);

// Export the db object
module.exports = db;
