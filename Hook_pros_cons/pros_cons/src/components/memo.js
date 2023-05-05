import React from 'react';
import { useMemo,useState } from 'react';
import ShowState from './showSate';
const Memo = () => {
    const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  const increaseNumber = () => {
    setNumber((prevState) => prevState + 1);
  };

  const decreaseNumber = () => {
    setNumber((prevState) => prevState - 1);
  };

  const onChangeTextHandler=(e)=>{
    setText(e.target.value);
  }

  return (
    <div style={{display:'flex',gap:'40px',margin:'200px auto',width:'300px'}}>
    <div>
        <button onClick={increaseNumber}>+</button>
        <button onClick={decreaseNumber}>-</button>
        <input
          type="text"
          placeholder="Last Name"
          onChange={onChangeTextHandler}
        />
      </div>
      <ShowState number={number} text={text} />
    </div>
  );
};

export default Memo;