import axios from "axios";

const API_URL = "http://localhost:5000/api/users";

export default {
  getAllUsers: async () => {
    const response = await axios.get(API_URL);
    return response.data;
  },
  blockUser: async (id) => {
    const response = await axios.post(`${API_URL}/${id}/block`);
    return response.data;
  },
  unblockUser: async (id) => {
    const response = await axios.post(`${API_URL}/${id}/unblock`);
    return response.data;
  },
};
