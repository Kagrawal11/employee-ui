// import React, { useState } from "react";
// import { API } from "../api";
// import { toast } from "react-toastify";

// const EmployeeForm = ({ onAdded }) => {
//   const [empname, setName] = useState("");
//   const [empSalary, setSalary] = useState("");
//   const [departmentid, setDept] = useState("");

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       await API.post("/create", { empname, empSalary, departmentid });
//       toast.success("Employee Added!");
//       onAdded();
//       setName("");
//       setSalary("");
//       setDept("");
//     } catch (error) {
//       toast.error("Error saving employee");
//       console.log(error);
//     }
//   };

//   return (
//     <form onSubmit={submitHandler}>
//       <input
//         value={empname}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Name"
//       />
//       <input
//         value={empSalary}
//         onChange={(e) => setSalary(e.target.value)}
//         placeholder="Salary"
//         type="number"
//       />
//       <input
//         value={departmentid}
//         onChange={(e) => setDept(e.target.value)}
//         placeholder="Department"
//         type="number"
//       />
//       <button>Add</button>
//     </form>
//   );
// };

// export default EmployeeForm;

// import React, { useState, useEffect } from "react";
// import { API } from "../api";
// import { toast } from "react-toastify";

// const EmployeeForm = ({ onAdded, editData, clearEdit }) => {
//   const [empname, setName] = useState("");
//   const [empSalary, setSalary] = useState("");
//   const [departmentid, setDept] = useState("");

//   useEffect(() => {
//     if (editData) {
//       setName(editData.empname);
//       setSalary(editData.empSalary);
//       setDept(editData.departmentid);
//     }
//   }, [editData]);

//   const submitHandler = async (e) => {
//     e.preventDefault();

//     try {
//       if (editData) {
//         // Update
//         await API.put(`/update/${editData.id}`, {
//           empname,
//           empSalary,
//           departmentid,
//         });
//         toast.success("Employee Updated!");
//         clearEdit();
//       } else {
//         // Create
//         await API.post("/create", { empname, empSalary, departmentid });
//         toast.success("Employee Added!");
//       }

//       onAdded();
//       setName("");
//       setSalary("");
//       setDept("");
//     } catch (err) {
//       toast.error("Error saving employee");
//     }
//   };

//   return (
//     <form onSubmit={submitHandler}>
//       <input
//         value={empname}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Name"
//       />
//       <input
//         value={empSalary}
//         onChange={(e) => setSalary(e.target.value)}
//         placeholder="Salary"
//         type="number"
//       />
//       <input
//         value={departmentid}
//         onChange={(e) => setDept(e.target.value)}
//         placeholder="Department"
//         type="number"
//       />
//       <button>{editData ? "Update" : "Add"}</button>
//     </form>
//   );
// };

// export default EmployeeForm;



import React, { useState, useEffect } from "react";
import { API } from "../api";
import { toast } from "react-toastify";

const EmployeeForm = ({ onAdded, editData, clearEdit }) => {
  const [empname, setName] = useState("");
  const [empSalary, setSalary] = useState("");
  const [departmentid, setDept] = useState("");

  useEffect(() => {
    if (editData) {
      setName(editData.empname);
      setSalary(editData.empSalary);
      setDept(editData.departmentid);
    }
  }, [editData]);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      if (editData) {
        await API.put(`/update/${editData.id}`, {
          empname,
          empSalary,
          departmentid,
        });
        toast.success("Employee Updated!");
        clearEdit();
      } else {
        await API.post("/create", { empname, empSalary, departmentid });
        toast.success("Employee Added!");
      }

      onAdded();
      setName("");
      setSalary("");
      setDept("");
    } catch (err) {
      toast.error("Error saving employee");
      console.log(err);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input value={empname} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input value={empSalary} onChange={(e) => setSalary(e.target.value)} placeholder="Salary" type="number" />
      <input value={departmentid} onChange={(e) => setDept(e.target.value)} placeholder="Dept" type="number" />
      <button>{editData ? "Update" : "Add"}</button>
    </form>
  );
};

export default EmployeeForm;
