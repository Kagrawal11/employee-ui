import { useEffect, useState } from "react";
import { API } from "../api";
import { toast } from "react-toastify";

function EmployeeTable({ refreshSignal, onEdit }) {
  const [employees, setEmployees] = useState([]);

  const loadData = async () => {
    const res = await API.get("/all");
    setEmployees(res.data);
  };

  useEffect(() => {
    loadData();
  }, [refreshSignal]);

  const deleteEmp = async (id) => {
    await API.delete(`/delete/${id}`);
    toast.info("Employee deleted");
    loadData();
  };

  const editEmp = (emp) => {
    onEdit(emp);
  };

  return (
    <table border="1" width="100%">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Salary</th>
          <th>DeptID</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((e) => (
          <tr key={e.id}>
            <td>{e.id}</td>
            <td>{e.empname}</td>
            <td>{e.empSalary}</td>
            <td>{e.departmentid}</td>
            <td>
              <button onClick={() => editEmp(e)}>Edit</button>
              <button onClick={() => deleteEmp(e.id)} style={{ marginLeft: "10px" }}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeTable;
