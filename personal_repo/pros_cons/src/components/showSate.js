import React from "react";
import { useMemo } from "react";

const getNumber = (number) => {
  console.log("숫자가 변동되었습니다.");
  return number;
};

const getText = (text) => {
  console.log("글자가 변동되었습니다.");
  return text;
};

const ShowState = ({ number, text }) => {
    const showNumber = useMemo(()=>getNumber(number),[number]);
    const showText = useMemo(()=>getText(text),[text]);
//   const showNumber = getNumber(number);
//   const showText = getText(text);

  return (
    <div className="info-wrapper">
      {showNumber} <br />
      {showText}
    </div>
  );
};

export default ShowState;