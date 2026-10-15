import React from "react";

const Result = ({ score, len }) => {
  const percentage = (score / len) * 100;
  let message = "";

  if (percentage >= 85) {
    message = "🏆 Excellent work!";
  } else if (percentage >= 60) {
    message = "🎉 Great job!";
  } else if (percentage >= 33) {
    message = "👍 Good try, keep practicing.";
  } else {
    message = "💪 Try again. You can do it!";
  }

  return (
    <div className="flex w-full flex-col items-center gap-5 rounded-2xl bg-white p-8 shadow-lg sm:p-12">
      <h1 className="text-4xl font-bold">Quiz Finished</h1>
      <p className="text-5xl font-extrabold text-blue-700 sm:text-6xl">
        You scored {score} out of {len}
      </p>
      <p className="text-2xl mt-2">{percentage.toFixed(2)}%</p>
      <p className="text-2xl mt-2">{message}</p>
    </div>
  );
};

export default Result;
