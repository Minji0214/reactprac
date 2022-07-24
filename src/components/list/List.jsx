import React, { Fragment, useState } from "react";
import "./style.css";
import Todo from "../todo/Todo";

const List = (props) => {
  let todoList = props.todoList;
  let setTodoList = props.setTodoList;
  //완료 
  let [todoDone,setTodoDone] =useState([])
  

  // const deleteTodo = (id) => props.setTodo(todoList.filter((x) => x.id !== id));
  return (
    <>
      <h2 className="working">working</h2>
      <hr />
      <div className="listBox">
       <Todo todoList={todoList}
       setTodoList={setTodoList}></Todo>
      </div>


      ////////////////////DONE
      <h2 className="working">done</h2>
     <hr />
      <div className="listBox">
       
       
        <div className="box">
          <div>
            <h3>제목</h3>
            <p>내용</p>
          </div>
          <div>
            <button className="btn">삭제</button>
            <button className="btn">취소</button>
          </div>
        </div>
    
        <div className="box">
        <div>
            <h3>제목</h3>
            <p>내용</p>
          </div>
          <div>
            <button className="btn">삭제</button>
            <button className="btn">완료</button>
          </div>
        </div>
    //////////////DONE
      </div>
    </>
  );
};
export default List;
