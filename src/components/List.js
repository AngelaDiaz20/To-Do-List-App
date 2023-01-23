import React from "react";
import Todo from "./Todo";

/*certain properties are created */
const List = ({ list, removeTodoListProp, editTodoListProp }) => {
    /*The .map is a method so that you can iterate each list that is added */
    const renderedList = list.map(
        (item) => (
            /*calls the TODO component where you are going to call the item variable with your object */
            <Todo
                title={item.title}
                completed={item.completed}
                /*by means of this property removeTodoListProp contains an event where
                 you can remove each item from the list by means of the id */
                removeTodoItemProp={(e) => removeTodoListProp(item._id)}
                /* through the editTodoListProp method can edit via id*/
                editTodoItemProp={(updatedItem) => editTodoListProp(item._id, updatedItem)}
                key={item.title}
            />
        )
    );
    return (
        /*calls the class and renders the renderedList property */
        <div className="ui grid center aligned">
            {renderedList}
        </div>
    );
};

export default List;