import apiClient from "./apiService";

export default {
  // Get all users (Excludes admin users)
  getAllUsers() {
    return apiClient
      .get("/api/users", {
        headers: {
          "x-access-token": localStorage.getItem("user"), // Include token from localStorage
        },
      })
      .then((response) => {
        // Filter out users with the admin role
        return response.data.filter((user) => user.role !== "admin");
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        throw error;
      });
  },

  // Block a user (Admin Only)
  blockUser(id) {
    return apiClient
      .put(`/api/users/block/${id}`, {}, { // Send an empty JSON object instead of null
        headers: {
          "x-access-token": localStorage.getItem("user"), // Include token
        },
      })
      .catch((error) => {
        console.error("Error blocking user:", error);
        throw error;
      });
  },

  // Unblock a user (Admin Only)
  unblockUser(id) {
    return apiClient
      .put(`/api/users/unblock/${id}`, {}, { // Send an empty JSON object instead of null
        headers: {
          "x-access-token": localStorage.getItem("user"), // Include token
        },
      })
      .catch((error) => {
        console.error("Error unblocking user:", error);
        throw error;
      });
  },
};
