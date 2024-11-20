const db = require("../models");
const Product = db.products;

// Controller to fetch all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message || "Error occurred while retrieving products." });
  }
};

// Controller to fetch a single product by ID
exports.getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: `Product with ID ${id} not found.` });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message || "Error occurred while retrieving the product." });
  }
};

// Controller to create a new product
exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message || "Error occurred while creating the product." });
  }
};

// Controller to update a product by ID
exports.updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const updated = await Product.update(req.body, { where: { id } });
    if (updated[0] === 0) {
      return res.status(404).json({ message: `Product with ID ${id} not found or no changes made.` });
    }
    res.status(200).json({ message: "Product updated successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message || "Error occurred while updating the product." });
  }
};

// Controller to delete a product by ID
exports.deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await Product.destroy({ where: { id } });
    if (deleted === 0) {
      return res.status(404).json({ message: `Product with ID ${id} not found.` });
    }
    res.status(200).json({ message: "Product deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message || "Error occurred while deleting the product." });
  }
};
