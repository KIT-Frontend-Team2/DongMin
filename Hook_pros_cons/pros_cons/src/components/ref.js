import React from 'react';
import { useState,useRef } from 'react';

export default function Ref() {
    const [count, setCount] = useState(0);
    const refCount = useRef(0);
    const AddRefCount=()=>{
        refCount.current = refCount.current +1
        console.log('마이너스 Ref : ' ,refCount.current)
    }
    const MinusRefCount=()=>{
        refCount.current = refCount.current -1
        console.log('마이너스 Ref : ' ,refCount.current)
    }

    const startCounter = () => {
       setCount((count) => count + 1)
       console.log("+1 시키기 state:",count)
    };
  
    const stopCounter = () => {
        setCount((count) => count -1)
        console.log(" -1 시키기 state:",count)
    };

  
    return (
      <>
      <div style={{display:'flex',gap:'40px',margin:'100px auto',width:'300px'}}>
            <div>
                <p>useState 카운트: {count}</p>
                <button onClick={startCounter}>시작</button>
                <button onClick={stopCounter}>정지</button>
            </div>
            <div>
                <p>useState 카운트: {refCount.current}</p>
                <button onClick={AddRefCount}>시작</button>
                <button onClick={MinusRefCount}>정지</button>
            </div>
        </div>
      </>
    );
  }