import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function LessonItem({ lesson }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{lesson.title}</Card.Title>
        <Card.Text>
          {showMore ? lesson.body : lesson.body.substring(0, 60) + "..."}
        </Card.Text>
        <Button variant="link" onClick={() => setShowMore(!showMore)}>
          {showMore ? <><FaChevronUp /> Show Less</> : <><FaChevronDown /> Show More</>}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default LessonItem;
