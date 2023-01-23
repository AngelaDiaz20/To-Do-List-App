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
  return (
    <div className="list">
      <div className="ui grid center aligned tasks">{renderedList}</div>
      <div className="filters">
        <a>Todas</a>
        <a>Pendientes</a>
        <a>Completadas</a>
      </div>
    </div>
  );
};

export default List;
