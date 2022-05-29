import React from "react";
import { AddTodoProps } from "./types";
import { ReactComponent as PlusIcon } from "../assets/svg/plus.svg";

export const AddTodo = ({
  handleSubmitTodo,
  task,
  handleChange,
}: AddTodoProps) => (
  <form
    className=" mt-2 ml-2 flex justify-between w-full"
    onSubmit={handleSubmitTodo}
  >
    <input
      type="text"
      name="task"
      value={task}
      className="flex-1 rounded shadow p-1 text-grey-dark mr-1"
      onChange={handleChange}
    />
    <button type="submit" aria-label="Add task">
      <PlusIcon />
    </button>
  </form>
);
