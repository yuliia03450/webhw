import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";

function LanguageQuiz() {
  const [selected, setSelected] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Form onSubmit={handleSubmit} className="mt-4">
      <h4><FaCheckCircle /> Quiz: What does "Bonjour" mean in English?</h4>
      <Form.Check
        type="radio"
        label="Hello"
        name="quiz"
        value="correct"
        onChange={(e) => setSelected(e.target.value)}
      />
      <Form.Check
        type="radio"
        label="Goodbye"
        name="quiz"
        value="wrong"
        onChange={(e) => setSelected(e.target.value)}
      />
      <Form.Check
        type="radio"
        label="Please"
        name="quiz"
        value="wrong2"
        onChange={(e) => setSelected(e.target.value)}
      />
      <Button type="submit" className="mt-2">Submit</Button>
      {submitted && (
        <Alert variant={selected === "correct" ? "success" : "danger"} className="mt-3">
          {selected === "correct" ? "Correct!" : "Try again!"}
        </Alert>
      )}
    </Form>
  );
}

export default LanguageQuiz;
