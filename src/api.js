import axios from "axios";

export const API = axios.create({
   baseURL: "https://employee-api-sew5.onrender.com/employee",
// baseURL: "https://employee-api-imqn.onrender.com/employee",
 //baseURL: "http://localhost:5000/employee"
});
