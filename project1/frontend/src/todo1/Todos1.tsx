import React, { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FormattedMessage, useIntl } from "react-intl";

import { Row1 } from "./Row1";
import { AddTodo } from "./AddTodo";
import { Todo } from "./types";

export const Todos1 = () => {
  const intl = useIntl();
  const data = [
    {
      id: "0",
      title: intl.formatMessage({ id: "todo04" }) + "1",
      task:
        intl.formatMessage({ id: "webtemp" }) +
        ": " +
        intl.formatMessage({ id: "english" }),
      isCompleted: true,
    },
    {
      id: "1",
      title: intl.formatMessage({ id: "todo04" }) + "2",
      task:
        intl.formatMessage({ id: "webtemp" }) +
        ": " +
        intl.formatMessage({ id: "arabic" }),
      isCompleted: false,
    },
    {
      id: "2",
      title: intl.formatMessage({ id: "todo04" }) + "3",
      task:
        intl.formatMessage({ id: "webtemp" }) +
        ": " +
        intl.formatMessage({ id: "bengali" }),
      isCompleted: false,
    },

    {
      id: "3",
      title: intl.formatMessage({ id: "todo04" }) + "4",
      task:
        intl.formatMessage({ id: "webtemp" }) +
        ": " +
        intl.formatMessage({ id: "chinese" }),
      isCompleted: false,
    },

    {
      id: "4",
      title: intl.formatMessage({ id: "todo04" }) + "5",
      task:
        intl.formatMessage({ id: "webtemp" }) +
        ": " +
        intl.formatMessage({ id: "dutch" }),
      isCompleted: false,
    },

    {
      id: "5",
      title: intl.formatMessage({ id: "todo04" }) + "6",
      task:
        intl.formatMessage({ id: "webtemp" }) +
        ": " +
        intl.formatMessage({ id: "french" }),
      isCompleted: false,
    },

    {
      id: "6",
      title: intl.formatMessage({ id: "todo04" }) + "7",
      task:
        intl.formatMessage({ id: "webtemp" }) +
        ": " +
        intl.formatMessage({ id: "german" }),
      isCompleted: false,
    },

    {
      id: "7",
      title: intl.formatMessage({ id: "todo04" }) + "8",
      task:
        intl.formatMessage({ id: "webtemp" }) +
        ": " +
        intl.formatMessage({ id: "hindi" }),
      isCompleted: false,
    },

    {
      id: "8",
      title: intl.formatMessage({ id: "todo04" }) + "9",
      task:
        intl.formatMessage({ id: "webtemp" }) +
        ": " +
        intl.formatMessage({ id: "indonesian" }),
      isCompleted: false,
    },

    {
      id: "9",
      title: intl.formatMessage({ id: "todo04" }) + "10",
      task:
        intl.formatMessage({ id: "webtemp" }) +
        ": " +
        intl.formatMessage({ id: "italian" }),
      isCompleted: false,
    },

    {
      id: "10",
      title: intl.formatMessage({ id: "todo04" }) + "11",
      task:
        intl.formatMessage({ id: "webtemp" }) +
        ": " +
        intl.formatMessage({ id: "japanese" }),
      isCompleted: false,
    },

    {
      id: "11",
      title: intl.formatMessage({ id: "todo04" }) + "12",
      task:
        intl.formatMessage({ id: "webtemp" }) +
        ": " +
        intl.formatMessage({ id: "marathi" }),
      isCompleted: false,
    },

    {
      id: "12",
      title: intl.formatMessage({ id: "todo04" }) + "13",
      task:
        intl.formatMessage({ id: "webtemp" }) +
        ": " +
        intl.formatMessage({ id: "portuguese" }),
      isCompleted: false,
    },

    {
      id: "13",
      title: intl.formatMessage({ id: "todo04" }) + "14",
      task:
        intl.formatMessage({ id: "webtemp" }) +
        ": " +
        intl.formatMessage({ id: "russian" }),
      isCompleted: false,
    },

    {
      id: "14",
      title: intl.formatMessage({ id: "todo04" }) + "15",
      task:
        intl.formatMessage({ id: "webtemp" }) +
        ": " +
        intl.formatMessage({ id: "spanish" }),
      isCompleted: false,
    },

    {
      id: "15",
      title: intl.formatMessage({ id: "todo04" }) + "16",
      task:
        intl.formatMessage({ id: "webtemp" }) +
        ": " +
        intl.formatMessage({ id: "swahili" }),
      isCompleted: false,
    },

    {
      id: "16",
      title: intl.formatMessage({ id: "todo04" }) + "17",
      task:
        intl.formatMessage({ id: "webtemp" }) +
        ": " +
        intl.formatMessage({ id: "tamil" }),
      isCompleted: false,
    },

    {
      id: "17",
      title: intl.formatMessage({ id: "todo04" }) + "18",
      task:
        intl.formatMessage({ id: "webtemp" }) +
        ": " +
        intl.formatMessage({ id: "telugu" }),
      isCompleted: false,
    },

    {
      id: "18",
      title: intl.formatMessage({ id: "todo04" }) + "19",
      task:
        intl.formatMessage({ id: "webtemp" }) +
        ": " +
        intl.formatMessage({ id: "turkish" }),
      isCompleted: false,
    },

    {
      id: "19",
      title: intl.formatMessage({ id: "todo04" }) + "20",
      task:
        intl.formatMessage({ id: "webtemp" }) +
        ": " +
        intl.formatMessage({ id: "urdu" }),
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
        <Row1
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
