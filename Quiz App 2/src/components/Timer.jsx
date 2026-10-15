import React from "react";
import { useEffect } from "react";
function Timer({ time, setTime }) {
  let changeColor = "";

  useEffect(() => {
    let interval = setInterval(() => {
      setTime((prev) => {
        if (prev == 0) {
          clearInterval(interval);
          return 0;
        } else {
          return prev - 1;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  if (time <= 10) {
    changeColor = "text-red-500";
  }
  return (
    <div className="mx-auto mt-6 w-[calc(100%-2rem)] max-w-2xl rounded-2xl bg-white px-6 py-5 text-center shadow-md">
      <h1
        className={`text-3xl font-bold tracking-wide sm:text-4xl ${
          time <= 10 ? "text-red-500" : "text-blue-700"
        }`}
      >
        Time{" "}
        {`${Math.floor(time / 60)
          .toString()
          .padStart(2, "0")} : ${(time % 60).toString().padStart(2, "0")}`}
      </h1>
    </div>
  );
}

export default Timer;
