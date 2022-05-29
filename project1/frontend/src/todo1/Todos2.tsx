import React, { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FormattedMessage, useIntl } from "react-intl";

import { Row2 } from "./Row2";
import { AddTodo } from "./AddTodo";
import { Todo } from "./types";

export const Todos2 = () => {
  const intl = useIntl();
  const data = [
    {
      id: "20",
      title: intl.formatMessage({ id: "todo04" }) + "21",
      task: intl.formatMessage({ id: "commerce" }) + "1",
      isCompleted: true,
    },
    {
      id: "21",
      title: intl.formatMessage({ id: "todo04" }) + "22",
      task: intl.formatMessage({ id: "commerce" }) + "2",
      isCompleted: false,
    },
    {
      id: "22",
      title: intl.formatMessage({ id: "todo04" }) + "23",
      task: intl.formatMessage({ id: "comment" }),
      isCompleted: false,
    },

    {
      id: "23",
      title: intl.formatMessage({ id: "todo04" }) + "24",
      task: intl.formatMessage({ id: "weather" }),
      isCompleted: false,
    },

    {
      id: "24",
      title: intl.formatMessage({ id: "todo04" }) + "25",
      task: intl.formatMessage({ id: "stripe" }),
      isCompleted: false,
    },

    {
      id: "25",
      title: intl.formatMessage({ id: "todo04" }) + "26",
      task: intl.formatMessage({ id: "crm" }),
      isCompleted: false,
    },

    {
      id: "26",
      title: intl.formatMessage({ id: "todo04" }) + "27",
      task: intl.formatMessage({ id: "lms" }),
      isCompleted: false,
    },

    {
      id: "27",
      title: intl.formatMessage({ id: "todo04" }) + "28",
      task:
        intl.formatMessage({ id: "rc" }) +
        ": " +
        intl.formatMessage({ id: "header03" }),
      isCompleted: false,
    },

    {
      id: "28",
      title: intl.formatMessage({ id: "todo04" }) + "29",
      task:
        intl.formatMessage({ id: "tw" }) +
        ": " +
        intl.formatMessage({ id: "header03" }),
      isCompleted: false,
    },

    {
      id: "29",
      title: intl.formatMessage({ id: "todo04" }) + "30",
      task:
        intl.formatMessage({ id: "ts" }) +
        ": " +
        intl.formatMessage({ id: "header03" }),
      isCompleted: false,
    },

    {
      id: "30",
      title: intl.formatMessage({ id: "todo04" }) + "31",
      task: intl.formatMessage({ id: "navbar01" }),
      isCompleted: true,
    },

    {
      id: "31",
      title: intl.formatMessage({ id: "todo04" }) + "32",
      task: intl.formatMessage({ id: "navbar09" }),
      isCompleted: true,
    },

    {
      id: "32",
      title: intl.formatMessage({ id: "todo04" }) + "33",
      task: intl.formatMessage({ id: "navbar12" }),
      isCompleted: true,
    },

    {
      id: "33",
      title: intl.formatMessage({ id: "todo04" }) + "34",
      task: intl.formatMessage({ id: "navbar15" }),
      isCompleted: true,
    },

    {
      id: "34",
      title: intl.formatMessage({ id: "todo04" }) + "35",
      task: intl.formatMessage({ id: "contact05" }),
      isCompleted: true,
    },

    {
      id: "35",
      title: intl.formatMessage({ id: "todo04" }) + "36",
      task: intl.formatMessage({ id: "navbarleft03" }),
      isCompleted: false,
    },

    {
      id: "36",
      title: intl.formatMessage({ id: "todo04" }) + "37",
      task: intl.formatMessage({ id: "navbarleft04" }),
      isCompleted: false,
    },

    {
      id: "37",
      title: intl.formatMessage({ id: "todo04" }) + "38",
      task: intl.formatMessage({ id: "navbarleft05" }),
      isCompleted: false,
    },

    {
      id: "38",
      title: intl.formatMessage({ id: "todo04" }) + "39",
      task: intl.formatMessage({ id: "navbarleft06" }),
      isCompleted: false,
    },

    {
      id: "39",
      title: intl.formatMessage({ id: "todo04" }) + "40",
      task: intl.formatMessage({ id: "navbarleft07" }),
      isCompleted: false,
    },

    {
      id: "40",
      title: intl.formatMessage({ id: "todo04" }) + "41",
      task: intl.formatMessage({ id: "navbarleft08" }),
      isCompleted: false,
    },
  ];

  const [todos, setTodos] = useState<Todo[]>(data);
  const [task, setTask] = useState("");
  const todosLength = todos.length;
  const hasTodos = todos.length > 0;
  const remainingTodos = todos.filter((todo) => !todo.isCompleted).length;

  const handleCheckTodo = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleAddTodo = (todo: Todo) => {
    const updatedTodos = [...todos, todo];
    setTodos(updatedTodos);
    setTask("");
  };

  const handleChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    setTask(value);
  };

  const handleSubmitTodo = (e: FormEvent) => {
    e.preventDefault();

    const todo = {
      id: uuidv4(),
      task: task,
      isCompleted: false,
    };
    task && handleAddTodo(todo);
  };

  return (
    <section className=" w-full flex flex-col items-center ml-1">
      <AddTodo
        handleChange={handleChange}
        handleSubmitTodo={handleSubmitTodo}
        task={task}
      />
      <div className="h-8" />
      {todos.map((todo) => (
        <Row2
          key={todo.id}
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          handleCheckTodo={handleCheckTodo}
        />
      ))}
      {!hasTodos && (
        <p className="mb-3 text-lg text-red-500 uppercase">
          <FormattedMessage id="todo02" defaultMessage="Please add a task!" />
        </p>
      )}
      {hasTodos && (
        <p>
          [{remainingTodos}{" "}
          <FormattedMessage
            id="todo03"
            defaultMessage="tasks remaining out of"
          />{" "}
          {todosLength}]
        </p>
      )}
    </section>
  );
};
