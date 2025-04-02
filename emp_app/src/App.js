import React, { useState } from "react";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";
import "bootstrap/dist/css/bootstrap.min.css";
import Searchbox from "./components/Searchbox";

function App() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  return (
    <div className="container mt-4">
      <EmployeeForm employee={selectedEmployee} onSuccess={() => setSelectedEmployee(null)} />
      <hr />
      <Searchbox />
      <hr />
      <EmployeeList onEdit={(emp) => setSelectedEmployee(emp)} />
    </div>
  );
}

export default App;
