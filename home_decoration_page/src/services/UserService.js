import apiClient from "./apiService";

const API_URL = "/api/users"; // Base URL for user-related API endpoints

export default {
  // Get all users (Excludes admin users)
  getAllUsers() {
    return apiClient.get("/api/users", {
      headers: {
        "x-access-token": localStorage.getItem("user"), // Include token from localStorage
      },
    }).then((response) => {
      // Filter out users with the admin role
      return response.data.filter(user => user.role !== "admin");
    }).catch((error) => {
      console.error("Error fetching users:", error);
      throw error;
    });
  },

  // Block a user (Admin Only)
  blockUser(id) {
    return apiClient.put(`/api/users/block/${id}`, null, {
      headers: {
        "x-access-token": localStorage.getItem("user"), // Include token
      },
    }).catch((error) => {
      console.error("Error blocking user:", error);
      throw error;
    });
  },

  // Unblock a user (Admin Only)
  unblockUser(id) {
    return apiClient.put(`/api/users/unblock/${id}`, null, {
      headers: {
        "x-access-token": localStorage.getItem("user"), // Include token
      },
    }).catch((error) => {
      console.error("Error unblocking user:", error);
      throw error;
    });
  },
};


