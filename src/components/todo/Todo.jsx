import React from "react";
import './style.css'

const Todo =()=>{
    return(
        <>
    ///false알때 
    {props.todoList.map((x, i) => {
          return (
            <Fragment key={x.id}>
              <div className="box">
                <div>
                  <h3>{x.title}</h3>
                  <p>{x.body}</p>
                </div>
                <div>
                  <button className="btn" onClick={()=> {
                    let test=props.todoList.filter((y) => {return y.id !== x.id;
                    });
                    props.setTodoList(test);
                    console.log(test)
                  }}>
                    삭제
                  </button>
                  <button className="btn" onClick={()=> {
                    let test=props.todoList.filter((y) => {return y.id !== x.id;
                    });  //기본 배열에서 지우고
                    props.setTodoList(test);
                    let test2 = props.todoList.filter((y) => {return y.id == x.id;
                    }); //완료만 따로뺌 
                    setTodoDone(test2);
                    console.log(test2)}}> 완료</button>
                </div>
              </div>
            </Fragment>
          );
        })}
/////////////////////////////
















        </>
    )
}

export default Todo