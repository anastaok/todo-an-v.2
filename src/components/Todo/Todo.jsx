import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Todo.scss";
import TodoItem from "./TodoItem";

const Todo = () => {
  const API = "https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10";

  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    axios.get(API).then((result) => {
      setTodos(result.data);
    });
  }, []);

  const inputTask = (event) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);
  };

  const addTask = () => {
    if (inputValue) {
      const id = todos[todos.length - 1].id + 1;
      const newTask = {
        completed: false,
        id: id,
        title: inputValue,
        userId: 1,
      };
      setTodos([...todos, newTask]);
      setInputValue("");
    }
  };

  return (
    <div className="mainContainer">
      <div className="title">Список дел на день</div>

      <div className="appСontainer">
        <input
          onChange={inputTask}
          value={inputValue}
          className="inputTask"
          placeholder="Введите задание..."
        ></input>
        <div onClick={addTask} className="addTask">
          Добавить запись
        </div>
      </div>

      <div className="tasks">
        {todos.length ? (
          todos.map((task, index) => {
            return (
              <TodoItem
                key={task.id}
                task={task}
                index={index}
                todos={todos}
                setTodos={setTodos}
              />
            );
          })
        ) : (
          <div>Нет заданий... Ты свободен!</div>
        )}
      </div>
    </div>
  );
};

export default Todo;
