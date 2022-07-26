import React, { Fragment, useEffect, useState, useContext } from "react";
import "./style.css";
import { ThemeContext } from "../../ThemeContext";

const Todo = ({ done}) => {
  return (
    <>
      {done ? (
        <Working
          done={done}
        />
      ) : (
        <Done
          done={done}
        />
      )}
    </>
  );
};

function Working() {
  const { todoList, setTodoList } = useContext(ThemeContext);
  let test = todoList.filter((y) => {
    return y.isDone === false;
  });

  return (
    <>
      {test.map((x, i) => {
        return (
          <Fragment key={x.id}>
            <div className="box">
              <div>
                <h3>{x.title}</h3>
                <p>{x.body}</p>
              </div>
              <div>
                <button
                  className="btn"
                  onClick={() => {
                    let test = todoList.filter((y) => {
                      return y.id !== x.id;
                    });
                    setTodoList(test);
                    if (todoList.length === 0) {
                      alert("모두 완료하였습니다.");
                    }
                  }}
                >
                  삭제
                </button>
                <button
                  className="btn"
                  onClick={() => {
                    const 인덱스 = todoList.findIndex(
                      (element) => element.id === x.id
                    );
                    let copy = [...todoList];
                    copy[인덱스].isDone = true;
                    setTodoList(copy);
                    console.log(todoList);
                  }}
                >
                  {" "}
                  완료
                </button>
              </div>
            </div>
          </Fragment>
        );
      })}
    </>
  );
}

function Done() {
  const { todoList, setTodoList } = useContext(ThemeContext);
  let test = todoList.filter((y) => {
    return y.isDone === true;
  });

  return (
    <>
      {test.map((x, i) => {
        return (
          <Fragment key={x.title}>
            <div className="box">
              <div>
                <h3>{x.title}</h3>
                <p>{x.body}</p>
              </div>
              <div>
                <button
                  className="btn"
                  onClick={() => {
                    let test3 = todoList.filter((y) => {
                      return y.id !== x.id;
                    });
                    setTodoList(test3);
                  }}
                >
                  삭제
                </button>
                <button
                  className="btn"
                  onClick={() => {
                    const 인덱스 = todoList.findIndex(
                      (element) => element.id === x.id
                    );
                    let copy = [...todoList];
                    copy[인덱스].isDone = false;
                    setTodoList(copy);
                  }}
                >
                  취소
                </button>
              </div>
            </div>
          </Fragment>
        );
      })}
    </>
  );
}
export default Todo;
