import React from "react";
import { API } from "../api";
import { toast } from "react-toastify";

const EmployeeTable = ({ employees, reload, onEdit }) => {
  
  const deleteEmployee = async (id) => {
    await API.delete(`/delete/${id}`);
    toast.info("Employee deleted");
    reload();
  };

  return (
    <table border="1" width="100%">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Salary</th>
          <th>Dept ID</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {employees.length === 0 ? (
          <tr>
            <td colSpan="5" align="center">No employees found</td>
          </tr>
        ) : (
          employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.empname}</td>
              <td>{emp.empSalary}</td>
              <td>{emp.departmentid}</td>
              <td>
                <button onClick={() => onEdit(emp)}>Edit</button>
                <button 
                  onClick={() => deleteEmployee(emp.id)} 
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
