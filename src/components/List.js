import React from "react";
import Todo from "./Todo";
//import styles
import "./List.css";

const List = ({ list, removeTodoListProp, editTodoListProp }) => {
  const renderedList = list.map((item) => (
    <Todo
      title={item.title}
      completed={item.completed}
      removeTodoItemProp={(e) => removeTodoListProp(item._id)}
      editTodoItemProp={(updatedItem) =>
        editTodoListProp(item._id, updatedItem)
      }
      key={item.title}
    />
  ));

  const showCompleted = () => {
    // hide pending tasks
    const pendingTasks = document.querySelectorAll(".false");
    pendingTasks.forEach((task) => {
      task.style.display = "none";
    });
    document.querySelector(".true.divider").style.display = "none";

    /* //show completed tasks
    const completedTasks = document.querySelectorAll(".true");
    completedTasks.forEach((task) => {
      task.style.display = "block";
    }); */
  };

  return (
    <div className="list">
      <div className="ui grid center aligned tasks">{renderedList}</div>
      <div className="filters">
        <a>Todas</a>
        <a>Pendientes</a>
        <a onClick={showCompleted}>Completadas</a>
      </div>
    </div>
  );
};

export default List;
