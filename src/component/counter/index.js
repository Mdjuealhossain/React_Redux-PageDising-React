"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementCounter, incrementCounter, resetCounter } from "../../services/action/ActionCounter";

const Counter = () => {
  const count = useSelector((state) => state.count);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCounter());
  };
  const handleDecrement = () => {
    dispatch(decrementCounter());
  };
  const handleReset = () => {
    dispatch(resetCounter());
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 5,justifyContent:"center" ,alignItems:"center" }}>
      <h1>Counter app</h1>
      <h3>count: {count}</h3>
      <div style={{ display: "flex", gap: 3 }}>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
