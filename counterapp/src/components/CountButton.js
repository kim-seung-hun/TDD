import React from "react";

export default function CountButton({ incrementFn, decrementFn }) {
  return (
    <div>
      <button onClick={incrementFn} data-testid="incrementBtn">
        +
      </button>
      <button onClick={decrementFn} data-testid="decrementBtn">
        -
      </button>
    </div>
  );
}
