import React from "react";
import { TodoProps } from "./types";

export const Row2 = ({
  todo: { id, task, isCompleted },
  handleCheckTodo,
  handleDeleteTodo,
}: TodoProps) => (
  <div
    className={`
        flex w-full p-2 mb-1 justify-between items-center
       ${isCompleted ? "bg-gray-400 " : "bg-teal-300"}
      `}
  >
    <p
      className={`
          ml-1 text-lg font-sans font-medium
          ${isCompleted ? "text-white line-through" : "text-gray-700"}
        `}
    >
      {task}
    </p>
    <div className="w-1/6 flex justify-between items-center mr-1">
      <button
        aria-label="Delete a todo"
        className="h-5 w-5 flex justify-center items-center bg-red-400 hover:bg-red-500 text-white font-bold  rounded"
        onClick={() => handleDeleteTodo(id)}
      >
        X
      </button>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => handleCheckTodo(id)}
        className="form-checkbox h-5 w-5"
      />
    </div>
  </div>
);
