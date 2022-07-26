import React, { Fragment, useState, useContext } from "react";
import "./style.css";
import Todo from "../todo/Todo";

const List = () => {
  return (
    <>
      <h2 className="working">working</h2>
      <hr />
      <div className="listBox">
        <Todo done></Todo>
      </div>

      <h2 className="working">done</h2>
      <hr />
      <div className="listBox">
        <Todo></Todo>
      </div>
    </>
  );
};
export default List;
