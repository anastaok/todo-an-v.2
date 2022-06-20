import React from "react";
import "./TodoItem.scss";

const TodoItem = ({ task, index, todos, setTodos }) => {
  const deleteTask = (id) => {
    const filterTask = todos.filter((task) => task.id !== id);
    setTodos(filterTask);
  };

  const checkTask = (index) => {
    const copy = [...todos];
    copy[index].completed = !copy[index].completed;

    setTodos(copy);
  };

  return (
    <div className="task" key={task.id}>
      <div className={`${task.completed ? "checkTask" : ""} taskItem`}>
        <input
          onClick={() => checkTask(index)}
          className="checkbox"
          type="checkbox"
        ></input>
        <div>
          {index + 1}&#46;&nbsp;
          {task.title}
        </div>
      </div>

      <div onClick={() => deleteTask(task.id)} className="deteleTask">
        &#10008;
      </div>
    </div>
  );
};

export default TodoItem;
