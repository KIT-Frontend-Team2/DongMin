import React, { useState,useReducer } from 'react';
import reducer from './reducerCount';
const Count = () => {
    const [count,dispatch] = useReducer(reducer,0)
    // const [count,setCount] = useState(0)
    const handlePlusCount = ()=>{
        // setCount((prev)=>prev+1)
        dispatch({
            type:"INCREASE"
        })
    }
    const handleMinusCount = ()=>{
        // setCount((prev)=>prev-1)
        dispatch({
            type:"DECREASE"
        })
    }
    const handleMultiplyCount = ()=>{
        // setCount((prev)=>prev-1)
        dispatch({
            type:"MULTIPLY"
        })
    }
    const handleSqrCount = ()=>{
        // setCount((prev)=>prev-1)
        dispatch({
            type:"SQR"
        })
    }
    return (
        <div>
            {count}
            <button onClick={handlePlusCount}>+</button>
            <button onClick={handleMinusCount}>-</button>
            <button onClick={handleMultiplyCount}>*</button>
            <button onClick={handleSqrCount}>/</button>

        </div>
    );
};

export default Count;