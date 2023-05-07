import React, { useState, useEffect } from "react";

const UseEffectTest = () => {
  const [count, setCount] = useState(0);
  const [countValue, setCountMinus] = useState(0);

  const countUp = () => setCount(count + 1);
  const countMinus = () => setCountMinus(countValue -1);

  useEffect(() => {
    console.log("useEffect!!", count);
    console.log("useEffect!!", countValue);

  });

  return (
    <div>
      <p>count값:{count}번 클릭!</p>
      <button onClick={countUp}>Click Me</button>


      <p>다른 값{countValue}번 클릭!</p>
      <button onClick={countMinus}>Click Me</button>
    </div>
  );
};

export default UseEffectTest;