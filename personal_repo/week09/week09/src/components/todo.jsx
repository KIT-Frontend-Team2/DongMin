import React, { useState,useReducer } from 'react';
import reducerToto from './reducerToto';
const Todo = () => {
        const [todoList,dispatch] = useReducer(reducerToto,[])

    // const [todoList,setTodoList] =useState([])
    const [text,setText] =useState()

    const handleInputValue = (e)=>{
        setText(e.target.value)
    }
    console.log(text)
    const handleAddValue = (payload)=>{
        // const Copy = [...todoList,text]
        // setTodoList(Copy)
        dispatch({
            type:"ADD",
            payload
        })
    }
    const handleDeleteValue = (payload)=>{
        // const Copy = [...todoList,text]
        // setTodoList(Copy)
        dispatch({
            type:"DELETE",
            payload
        })
    }

    return (
        <div>
            <div><input type="text" onChange={handleInputValue} /></div>
            <button onClick={()=>{handleAddValue(text)}}>add</button>
            <button onClick={()=>{handleDeleteValue(text)}}>delete</button>
            <ul>
                {todoList.map((v)=>{
                    return <li>{v}</li>
                })}
            </ul>
        </div>
    );
};

export default Todo;