import React, { useEffect, useState } from "react";
import LessonItem from "./LessonItem";

function LessonList() {
  const [lessons, setLessons] = useState([]);

  const fetchLessons = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
      const data = await response.json();
      setLessons(data);
    } catch (error) {
      console.error("Failed to load lessons:", error);
    }
  };

  useEffect(() => {
    fetchLessons();
    const interval = setInterval(fetchLessons, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h3>Available Language Lessons</h3>
      {lessons.map((lesson) => (
        <LessonItem key={lesson.id} lesson={lesson} />
      ))}
    </div>
  );
}

export default LessonList;
