import React from "react";

function Button({ text }) {
  return (
    <>
      <button className="bg-blue-400 text-white rounded-full px-5 py-2">
        {text}
      </button>
    </>
  );
}

export default Button;
