import { useState } from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeTable from "./components/EmployeeTable";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [refresh, setRefresh] = useState(0);

  const triggerRefresh = () => {
    setRefresh(refresh + 1);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Employee Management</h2>
      <EmployeeForm refresh={triggerRefresh} />
      <EmployeeTable refreshSignal={refresh} />
      <ToastContainer />
    </div>
  );
}

export default App;
