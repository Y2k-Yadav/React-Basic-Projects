import React from "react";

const Button = ({ setTime, setScore, setCurrentIndex, timing }) => {
  function restartFunction() {
    setTime(timing);
    setScore(0);
    setCurrentIndex(0);
  }
  return (
    <div>
      <button
        onClick={() => {
          restartFunction();
        }}
        className="bg-blue-500 w-24 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded "
      >
        Restart
      </button>
    </div>
  );
};

export default Button;
