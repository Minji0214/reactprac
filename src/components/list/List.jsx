import React, { Fragment, useState } from "react";
import "./style.css";
import Todo from "../todo/Todo";

const List = (props) => {
  let todoList = props.todoList;
  let setTodoList = props.setTodoList;
  let [todoDone, setTodoDone] = useState([
    { id: 5, title: "시험보기", body: "알고리즘시험" },
  ]);
  // const deleteTodo = (id) => props.setTodo(todoList.filter((x) => x.id !== id));
  return (
    <>
      <h2 className="working">working</h2>
      <hr />
      <div className="listBox">
  
        <Todo todoList={todoList}
         todoDone={todoDone}
         setTodoDone={setTodoDone}
          setTodoList={setTodoList} done></Todo>
      </div>

      <h2 className="working">done</h2>
      <hr />
      <div className="listBox">
    
            <Todo todoList={todoList} 
             todoDone={todoDone}
             setTodoDone={setTodoDone}
             setTodoList={setTodoList}></Todo>
      </div>
    </>
  );
};
export default List;
