import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import Header from "../components/header/Header";
import Form from "../components/form/Form";
import List from "../components/list/List";
import Todo from "../components/todo/Todo";

const TodoList = () => {
  let [todoList, setTodoList] = useState([
    { id: 1, title: "공부하기", body: "리액트과제" },
    { id: 2, title: "옷사러가기", body: "언니랑같이가기" },
    { id: 3, title: "친구만나기", body: "저녁8시" },
  ]);

  return (
    <>
      <Layout>
        <Header />
      </Layout>

      <Form todoList={todoList} setTodoList={setTodoList} />
      <List todoList={todoList} setTodoList={setTodoList} />

    </>
  );
};
export default TodoList;
