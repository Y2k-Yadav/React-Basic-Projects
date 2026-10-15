import { useState } from "react";
import "./App.css";
import Timer from "./components/Timer";
import Question from "./components/Question";
import Result from "./components/Result";
import questions from "./components/Question.json";
import Button from "./components/Button";

function App() {
  let timing = 15;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(timing);
  if (currentIndex == questions.length || time == 0) {
    return (
      <div className="my-10 max-w-md mx-auto py-10 bg-white text-blue-900 text-center rounded-lg shadow-md flex flex-col gap-4">
        {" "}
        <Result score={score} len={questions.length} />
        <Button
          setCurrentIndex={setCurrentIndex}
          setScore={setScore}
          setTime={setTime}
          timing={timing}
        />
      </div>
    );
  } else {
    return (
      <div className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center gap-6 bg-slate-100 px-6 py-10 text-center">
        <Timer time={time} setTime={setTime} />
        <Question
          score={score}
          setScore={setScore}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
    );
  }
}

export default App;
