import { useState, useRef, useEffect } from "react";

function Q2() {
  const arr = useRef([]);
  const [forceRender, setForceRender] = useState(false);
  const Input = useRef();
  const [text, setText] = useState("");
  const [showList, setShowList] = useState(false);
    const arrCopy = useRef()
  //list에 추가하는 함수
  //input에 값이 없으면 리턴
  //arr라는 ref 배열에 input의 value값을 추가함.
  //input을 비워줌
  const onAddList = () => {
    setForceRender((prev) => !prev);
    if (Input.current.value === "") return;
    setShowList(false); // << 이거 수정
    arr.current.push(Input.current.value);
    Input.current.value = "";
  };

  //제출버튼을 누르면 arr에 있던 내용이 list에서 렌더링 되어야 함.
  //forSubmit이라는 상태를 true로 바꿔서 arr안의 내용이 보이도록 함
  const onSubmit = () => {
    arrCopy.current = [...arr.current]
    setShowList(true);
  };

  //2-2
  //색상을 바꾸는 함수
  const targetText = useRef();
  const onClickChangeColor = () => {
    targetText.current.style.color = "red";
  };

  return (
    <>
      <h1>문제2</h1>
      <div>
        <h2>문제 2-1</h2>
        <p>
          <input ref={Input} />
        </p>
        <p>
          <button onClick={onAddList}>추가</button>
        </p>
        <p>
          <button onClick={onSubmit}>제출</button>
        </p>
        {/*리스트가 나오는 부분. showList가 true이고 arr가 undefined일때만
        해당 '제출된 목록이 없습니다.'를 보여줌 */}
        <ul>
          {showList && !arr.current.length && (
            <div>제출된 목록이 없습니다.</div>
          )}
          {/* showList가 true이고 arr.length가 0이 아닐때만(무언가 추가됨) 해당 
          list가 렌더링됨*/}
          {showList === false ? 
          (arrCopy.current === undefined) ? null:
            arrCopy.current.map((text) => <li>{text}</li>) :
            arr.current.map((text) => <li>{text}</li>)
            }
        </ul>
      </div>
      <div>
        <h2>문제 2-2</h2>
        <p ref={targetText}> 이 문구는 아래 버튼을 누르면 색상이 바뀝니다</p>
        <button onClick={onClickChangeColor}>변경</button>
      </div>
    </>
  );
}
export default Q2;