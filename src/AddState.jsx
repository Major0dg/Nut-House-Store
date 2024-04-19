import React, { useState } from "react";

const AddState = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button
        className="rounded-md bg-green-900 flex px-3 py-2 justify-center items-center text-white"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <br />
      <button
        className="rounded-md bg-green-900 flex px-3 py-2 justify-center items-center text-white"
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
    </div>
  );
};

export default AddState;
``;
