import React from 'react';
import { useState } from 'react';
const Add = () => {
    const [age,setAge] = useState(27)
    return (
        <div style={{margin:'100px auto',width:300}}>
            <div>장동민의 나이 : {age}</div>
            <div><button onClick={()=>{setAge(age+1)}}>벌써 일년</button></div>
        </div>
    );
};

export default Add;