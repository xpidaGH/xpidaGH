import React from "react";
import { Counter1 } from "./Counter1";

// props
// hooks
// render props

const Counter: React.FC = () => {
  return (
    <div className=" rounded-tl-lg content-center items-center border-lime-400 border-4 bg-teal-300 text-3xl text-white p-10 m-8 space-x-20 space-y-10">
      <Counter1>
        {({ count, setCount }) => (
          <div>
            <div className="rounded-lg p-2 border-2 border-orange-300">
              {count}
            </div>
            <button
              className=" rounded-lg p-2
             text-blue-700 bg-orange-300"
              onClick={() => setCount(count + 1)}
            >
              +
            </button>
          </div>
        )}
      </Counter1>
    </div>
  );
};

export default Counter;
