import axios from "axios";

const API_URL = "http://localhost:5000/api/products";

// Fetch all products (Public)
const getAllProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// Fetch a product by ID (Public)
const getProductById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product details:", error);
    throw error;
  }
};

// Create a new product (Admin Only)
const createProduct = async (product) => {
  try {
    const response = await axios.post(API_URL, product, {
      headers: { "x-access-token": localStorage.getItem("token") }, // Pass token in headers
    });
    return response.data;
  } catch (error) {
    console.error("Error creating product:", error);
    throw error;
  }
};

// Update a product by ID (Admin Only)
const updateProduct = async (id, product) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, product, {
      headers: { "x-access-token": localStorage.getItem("token") }, // Pass token in headers
    });
    return response.data;
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};

// Delete a product by ID (Admin Only)
const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`, {
      headers: { "x-access-token": localStorage.getItem("token") }, // Pass token in headers
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};

// Delete all products (Admin Only)
const deleteAllProducts = async () => {
  try {
    const response = await axios.delete(API_URL, {
      headers: { "x-access-token": localStorage.getItem("token") }, // Include token for admin verification
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting all products:", error);
    throw error;
  }
};

// Add a rating to a product (Public)
const addRating = async (id, rating) => {
  try {
    const response = await axios.post(
      `${API_URL}/${id}/rating`,
      { rating },
      {
        headers: { "x-access-token": localStorage.getItem("token") }, // Optional: if rating requires auth
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error submitting rating:", error);
    throw error;
  }
};

export default {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  deleteAllProducts,
  addRating,
};
