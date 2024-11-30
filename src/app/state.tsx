"use client";
import React, { useState } from "react";

const State = () => {
  const [count, setCount] = useState(0);
  const handle_Increment = () => {
    setCount(count + 1);
    console.log("Increment value", count + 1);
  };
  const handle_Decrement = () => {
    setCount(count - 1);
    console.log("Decrement value", count - 1);
  };
  const Reset = () => {
    setCount(0);
    console.log("Reset value", 0);
  };

  return (
    <div className="bg-black flex justify-center">
      <div className="bg-white shadow-custom text-black m-5 w-6/12 rounded-full flex flex-col items-center ">
        <p className="items-center p-3">UseState</p>
        <p>Count:{count}</p>
        <div className="flex m-3 justify-center gap-5">
          <button
            onClick={handle_Increment}
            className="  bg-red-200 text-black rounded-2xl p-3"
          >
            Increment
          </button>
          <button onClick={Reset} className=" bg-slate-600 rounded-2xl p-3">
            Reset
          </button>
          <button
            onClick={handle_Decrement}
            className=" bg-red-600  text-black rounded-2xl p-3"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default State;
