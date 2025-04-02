import React, { useState, useEffect } from "react";
import { createEmployee, updateEmployee } from "../api";
import { Form, Button, Container } from "react-bootstrap";

const EmployeeForm = ({ employee, onSuccess }) => {
  const [formData, setFormData] = useState({ name: "", position: "", salary: "" });

  useEffect(() => {
    if (employee) setFormData(employee);
  }, [employee]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    employee ? await updateEmployee(employee.id, formData) : await createEmployee(formData);
    onSuccess();
  };

  return (
    <Container>
      <h2>{employee ? "Edit Employee" : "Add Employee"}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Position</Form.Label>
          <Form.Control type="text" name="position" value={formData.position} onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Salary</Form.Label>
          <Form.Control type="number" name="salary" value={formData.salary} onChange={handleChange} required />
        </Form.Group>
        <Button type="submit" variant="primary">{employee ? "Update" : "Create"}</Button>
      </Form>
    </Container>
  );
};

export default EmployeeForm;
