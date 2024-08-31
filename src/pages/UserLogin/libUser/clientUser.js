import axios from "axios";

const client = axios.create({
  baseURL: "https://goit-task-manager.herokuapp.com/",
});

const setAuthHeader = (token) => {
  client.defaults.headers.common.Authorization = `Baerer ${token}`;
};

const clearAuthHeader = () => {
  clearInterval.defaults.headers.common.Authorization = "";
};

export { client, setAuthHeader, clearAuthHeader };
