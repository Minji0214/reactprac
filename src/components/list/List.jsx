import React, { Fragment, useState } from "react";
import "./style.css";
import Todo from "../todo/Todo";




const List = (props) => {
  let todoList = props.todoList;
  let setTodoList = props.setTodoList;


  // const deleteTodo = (id) => props.setTodo(todoList.filter((x) => x.id !== id));
  return (
    <>
      <h2 className="working">working</h2>
      <hr />
      <div className="listBox">
       <Todo todoList={todoList}
       setTodoList={setTodoList}></Todo>
      </div>


      
      <h2 className="working">done</h2>
     <hr />
      <div className="listBox">
       
      <Todo todoList={todoList}
       setTodoList={setTodoList}></Todo>
        
      </div>
    </>
  );
};
export default List;
