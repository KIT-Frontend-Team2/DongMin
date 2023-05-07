import React from 'react';
import { useState } from 'react';
const Add = () => {
    const [age,setAge] = useState(27)
    const [name,setName] = useState('');
       
    return (
        <div style={{margin:'100px auto',width:300}}>
                        <p>{`name is ${name}`}</p>
            <input type='text' value={name} onChange={e=>setName(e.target.value)}></input>
            <div>장동민의 나이 : {age}</div>
            <div><button onClick={()=>{setAge(age+1)}}>벌써 일년</button></div>
        </div>
    );
};
 
export default Add;