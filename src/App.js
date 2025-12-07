// import React, { useEffect, useState } from "react";
// import { API } from "./api";
// import EmployeeForm from "./components/EmployeeForm";
// import EmployeeTable from "./components/EmployeeTable";

// function App() {
//   const [employees, setEmployees] = useState([]);

//   const loadData = async () => {
//     const res = await API.get("/all");
//     setEmployees(res.data);
//   };

//   useEffect(() => {
//     loadData();
//   }, []);

//   return (
//     <div>
//       <h2>Employee Manager</h2>
//       <EmployeeForm onAdded={loadData} />
//       <EmployeeTable employees={employees} reload={loadData} onEdit={(emp)=>console.log("Edit",emp)} />
//     </div>
//   );
// }

// export default App;


// import { useState } from "react";
// import EmployeeForm from "./components/EmployeeForm";
// import EmployeeTable from "./components/EmployeeTable";

// function App() {
//   const [refresh, setRefresh] = useState(false);
//   const [editingEmp, setEditingEmp] = useState(null);

//   const refreshList = () => setRefresh(!refresh);

//   const handleEdit = (emp) => setEditingEmp(emp);

//   return (
//     <div className="App">
//       <h2>Employee Manager</h2>

//       <EmployeeForm
//         onAdded={refreshList}
//         editData={editingEmp}
//         clearEdit={() => setEditingEmp(null)}
//       />

//       <EmployeeTable
//         refreshSignal={refresh}
//         onEdit={handleEdit}
//       />
//     </div>
//   );
// }

// export default App;

import { useEffect, useState } from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeTable from "./components/EmployeeTable";
import { API } from "./api";

function App() {
  const [employees, setEmployees] = useState([]);
  const [editingEmp, setEditingEmp] = useState(null);

  const loadData = async () => {
    const res = await API.get("/all");
    setEmployees(res.data);
  };

  const refreshList = () => {
    loadData();
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="App">
      <h2>Employee Manager</h2>

      <EmployeeForm
        onAdded={refreshList}
        editData={editingEmp}
        clearEdit={() => setEditingEmp(null)}
      />

      <EmployeeTable
        employees={employees}
        reload={refreshList}
        onEdit={(emp) => setEditingEmp(emp)}
      />
    </div>
  );
}

export default App;
