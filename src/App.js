import React, { useEffect, useState } from "react";
import { API } from "./api";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeTable from "./components/EmployeeTable";

function App() {
  const [employees, setEmployees] = useState([]);

  const loadData = async () => {
    const res = await API.get("/all");
    setEmployees(res.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <h2>Employee Manager</h2>
      <EmployeeForm onAdded={loadData} />
      <EmployeeTable employees={employees} reload={loadData} onEdit={(emp)=>console.log("Edit",emp)} />
    </div>
  );
}

export default App;
