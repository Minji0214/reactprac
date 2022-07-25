import React, { Fragment, useEffect, useState } from "react";
import "./style.css";

const Todo = ({ todoList, setTodoList, done, todoDone, setTodoDone }) => {
  //완료

  return (
    <>
      {done ? (
        <Working
          done={done}
          todoList={todoList}
          setTodoList={setTodoList}
          todoDone={todoDone}
          setTodoDone={setTodoDone}
        />
      ) : (
        <Done
          done={done}
          todoList={todoList}
          setTodoList={setTodoList}
          todoDone={todoDone}
          setTodoDone={setTodoDone}
        />
      )}
    </>
  );
};

function Working({ todoList, setTodoList, todoDone, setTodoDone }) {
  return (
    <>
      {todoList.map((x, i) => {
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
                    let test = todoList.filter((y) => {
                      return y.id !== x.id;
                    }); //기본 배열에서 지우고
                    setTodoList(test);
                    let test2 = todoList.filter((y) => {
                      return y.title == x.title;
                    }); //완료만 따로뺌

                    setTodoDone([...todoDone, ...test2]);
                    console.log("완료");
                    console.log(test2);
                    console.log(todoDone);
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

function Done({ todoList, setTodoList, todoDone, setTodoDone }) {
  return (
    <>
      {todoDone.map((x, i) => {
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
                    let test = todoDone.filter((y) => {
                      return y.title !== x.title;
                    });
                    setTodoDone(test);
                    console.log(test);
                  }}
                >
                  삭제
                </button>
                <button
                  className="btn"
                  onClick={() => {
                    let test = todoDone.filter((y) => {
                      return y.title !== x.title;
                    });
                    setTodoDone(test);
                    let test2 = todoDone.filter((y) => {
                      return y.title == x.title;
                    });
                    setTodoList([...test2, ...todoList]);
                    console.log(test2);
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
