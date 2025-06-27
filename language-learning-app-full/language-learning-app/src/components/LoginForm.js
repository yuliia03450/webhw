import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { FaSignInAlt } from "react-icons/fa";

function LoginForm() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email.trim() || !form.password.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Invalid email format.");
      return;
    }
    setError("");
    alert("Welcome to the language platform (simulated login)");
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <h3><FaSignInAlt /> Login to Your Account</h3>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" onChange={handleChange} />
      </Form.Group>
      <Button type="submit"><FaSignInAlt /> Login</Button>
    </Form>
  );
}

export default LoginForm;
