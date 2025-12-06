import axios from "axios";

export const API = axios.create({
 baseURL: "https://employee-api-imqn.onrender.com/employee",
});
