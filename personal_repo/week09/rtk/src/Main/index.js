import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { PLUS_AMOUNT, MINUS_ONE, PLUS_ONE } from "../reducer/calculate";
const Main = () => {
  const name = useSelector((state) => state.calculate.name);
  const dispatch = useDispatch();

  return (
    <div>
      {name.map((name) => {
        return <span key={name}>{name} </span>;
      })}
      <button onClick={() => dispatch(PLUS_ONE("Kim"))}>+1</button>
      <button onClick={() => dispatch(MINUS_ONE("John"))}>-1</button>
      {/* <h3>현재 count 값: {count}</h3>
      <button onClick={() => dispatch(PLUS_ONE())}>+1</button>
      <button onClick={() => dispatch(MINUS_ONE())}>-1</button>
      <button onClick={() => dispatch(PLUS_AMOUNT(5))}>+5</button> */}
    </div>
  );
};

export default Main;
