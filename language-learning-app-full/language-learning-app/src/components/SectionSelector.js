import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { FaBookOpen, FaQuestionCircle } from "react-icons/fa";

function SectionSelector({ setSection }) {
  return (
    <div className="mb-4">
      <ButtonGroup>
        <Button onClick={() => setSection("lessons")} variant="outline-primary">
          <FaBookOpen /> Lessons
        </Button>
        <Button onClick={() => setSection("quiz")} variant="outline-secondary">
          <FaQuestionCircle /> Quiz
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default SectionSelector;
