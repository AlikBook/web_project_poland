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

export default {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
