import React, { useState,useContext } from "react";
import Layout from "../components/layout/Layout";
import Header from "../components/header/Header";
import Form from "../components/form/Form";
import List from "../components/list/List";
import Todo from "../components/todo/Todo";
import { ThemeContext } from "../ThemeContext";

const TodoList = () => {
  let [todoList, setTodoList] = useState([
    { id: 1, title: "공부하기", body: "리액트과제", isDone: false },
    { id: 2, title: "옷사러가기", body: "언니랑같이가기", isDone: false},
    { id: 3, title: "친구만나기", body: "저녁8시", isDone: false },
    { id: 4, title: "아오그만하고싶네", body: "새벽까지", isDone: true },
  ]);

  return (
    <>

      <Layout>
        <Header />
        <ThemeContext.Provider value={{todoList, setTodoList}}>
      <Form />
      <List />
      </ThemeContext.Provider>
      </Layout>
     
    </>
  );
};
export default TodoList;
