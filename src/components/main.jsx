import React, { useState } from "react";
import { Todo } from "./todo";
import { Dbtn, Inputdiv, Sdiv, Sh1, TodoDiv, Todoh1 } from "../style/styled";
let idd = 1;
export const Main = () => {
  const [tasks, setTasks] = useState([]);
  const singleTodo = (todo) => {
    setTasks([...tasks, { id: idd++, task: todo }]);
  };

  console.log(tasks.task);

  const onDelete = (id) => {
    const newwTodo = tasks.filter((a) => a.id !== id);
    setTasks(newwTodo);
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "50px",
      }}
    >
      <Sdiv>
        <Sh1>TODOLIST</Sh1>
        <Todo onChoosen={singleTodo} />
        {tasks.map((task) => (
          <TodoDiv>
            <Todoh1>{task.task}</Todoh1>
            <Dbtn onClick={() => onDelete(task.id)}>Delete</Dbtn>
          </TodoDiv>
        ))}
      </Sdiv>
    </div>
  );
};
