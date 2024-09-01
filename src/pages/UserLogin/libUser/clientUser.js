import axios from "axios";

const client = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

const setAuthHeader = (token) => {
  client.defaults.headers.common.Authorization = `Baerer ${token}`;
};

const clearAuthHeader = () => {
  clearInterval.defaults.headers.common.Authorization = "";
};

export { client, setAuthHeader, clearAuthHeader };
