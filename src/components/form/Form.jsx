import React, { useEffect, useState, useContext } from "react";
import "./style.css";
import { ThemeContext } from "../../ThemeContext";



const Form = () => {
  let [todoTitle, setTitle] = useState("");
  let [todo, setTodo] = useState("");
  const {todoList,setTodoList} = useContext(ThemeContext)

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
        id: todoList[todoList.length - 1].id + 1,
        title: todoTitle,
        body: todo,
        isDone: false,
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
