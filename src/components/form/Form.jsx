import React, { useEffect, useState } from "react";
import "./style.css";
import List from "../list/List";
import Todo from "../todo/Todo";

const Form = (props) => {
  let [todoTitle, setTitle] = useState("");
  let [todo, setTodo] = useState("");

  let todoList = props.todoList;
  let setTodoList = props.setTodoList;
 

  //object 최댓값

  const inputTitle = (e) => {
    setTitle(e.target.value);
  };
  const inputTodo = (e) => {
    setTodo(e.target.value);
  };
  const onClick = () => {
    setTodoList([
      ...todoList,
      {
        id: todoList.length+1,
        title: todoTitle,
        body: todo,
        isDone: false
      },
    ]);
    setTitle("");
    setTodo("");
  };

  return (
    <>
      <div className="formBox">
        <div className="titleBox">
          <span>제목</span>
          <input onChange={inputTitle} value={todoTitle} type="text" />
        </div>

        <div>
          <span>내용</span>
          <input onChange={inputTodo} value={todo} type="text" />
          <button onClick={onClick} className="addBtn">
            추가하기
          </button>
        </div>
      </div>
    </>
  );
};
export default Form;
