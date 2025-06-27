import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import LessonList from "./components/LessonList";
import LanguageQuiz from "./components/LanguageQuiz";
import SectionSelector from "./components/SectionSelector";

function App() {
  const [section, setSection] = useState("lessons");

  return (
    <div className="container mt-4">
      <LoginForm />
      <SectionSelector setSection={setSection} />
      {section === "lessons" && <LessonList />}
      {section === "quiz" && <LanguageQuiz />}
    </div>
  );
}

export default App;
