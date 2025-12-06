import { useState, useEffect } from "react";
import { API } from "../api";
import { toast } from "react-toastify";

function EmployeeForm({ refresh, selectedEmp, clearEdit }) {
  const [form, setForm] = useState({
    empname: "",
    empSalary: "",
    departmentid: ""
  });

  useEffect(() => {
    if (selectedEmp) {
      setForm(selectedEmp); // Populate form for editing
    }
  }, [selectedEmp]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (form.id) {
        await API.put(`/update/${form.id}`, form);
        toast.success("Employee Updated!");
        clearEdit();
      } else {
        await API.post("/create", form);
        toast.success("Employee Added!");
      }
      refresh();
      setForm({ empname: "", empSalary: "", departmentid: "" });
    } catch (err) {
      toast.error("Error saving employee");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        name="empname"
        placeholder="Name"
        value={form.empname}
        onChange={handleChange}
        required
      />
      <input
        name="empSalary"
        placeholder="Salary"
        value={form.empSalary}
        onChange={handleChange}
        required
      />
      <input
        name="departmentid"
        placeholder="Dept ID"
        value={form.departmentid}
        onChange={handleChange}
        required
      />
      <button type="submit">{form.id ? "Update" : "Add"}</button>
      {form.id && (
        <button type="button" onClick={clearEdit} style={{ marginLeft: "10px" }}>
          Cancel
        </button>
      )}
    </form>
  );
}

export default EmployeeForm;
