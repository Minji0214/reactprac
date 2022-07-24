import React, { useState } from "react";
import "./style.css";
import List from "../list/List";
import Todo from "../todo/Todo";

const Form = (props) => {
  let [todoTitle, setTitle] = useState("");
  let [todo, setTodo] = useState("");

  let todoList = props.todoList;
  let setTodoList = props.setTodoList;
  let [todoId, setId] = useState(todoList[todoList.length - 1].id);

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
        id: todoId+1,
        title: todoTitle,
        body: todo,
      },
    ]);
 
  };

  return (
    <>
      <div className="formBox">
        <div className="titleBox">
          <span>제목</span>
          <input onChange={inputTitle}  type="text" />
        </div>

        <div>
          <span>내용</span>
          <input onChange={inputTodo} type="text" />
          <button onClick={onClick} className="addBtn">
            추가하기
          </button>
        </div>
      </div>
    </>
  );
};
export default Form;
