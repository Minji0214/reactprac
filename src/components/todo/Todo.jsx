import React, { Fragment, useState } from "react";
import "./style.css";

const Todo = ({ todoList, setTodoList }) => {
  //완료
  let [todoDone, setTodoDone] = useState([]);
  let [done, setDone] = useState(false);

  const [state, setState] = React.useState(todoList);

  React.useEffect(() => {
    setState(todoList);
  }, [todoList]);

  //done ? done : working
  return (
    <>
      ///false알때
      {todoList.map((x, i) => {
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
                      return y.id == x.id;
                    }); //완료만 따로뺌
                    console.log(test2);
                    let copy = [...todoDone];

                    setTodoDone([...todoDone, ...test2]);
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
      /////////////////////////////
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
                      return y.id !== x.id;
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
                      return y.id !== x.id;
                    }); // todoDone 배열에서 지우고
                    setTodoDone(test);
                    let test2 = todoDone.filter((y) => {
                      return y.id == x.id;
                    }); //취소는 다시  todoList로
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
      ///////////////////////
    </>
  );
};

export default Todo;
