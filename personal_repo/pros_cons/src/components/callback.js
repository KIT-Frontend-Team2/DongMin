import React from 'react';
import { useState,useCallback,useMemo } from 'react';
import List from './list';


// 부모에게서 받는 getItems라는 함수 props가 부모 컴포넌트가 리렌더링 되면서 변경된 props로 인식되기에 발생하는 현상이죠.
// 그렇게 되기에 부모 컴포넌트의 number값이 새로 설정되며 해당 함수가 계속 반복되어서 실행되는 것이죠.


/* useMemo는 함수를 반환하지 않고, 함수의 결과 값만 memoization해서 반환하기 때문입니다!
그와 다르게 useCallback은 함수 자체를 memoization 해서 반환하죠.
이것이 바로 useMemo와 useCallback의 핵심적인 차이점입니다. 🤗 */



/* useCallback과 useMemo를 사용할 경우 해당 hook을 호출하고, 그 안에 들어갈 함수를 만들어 넘기고, 
의존성 체크를 목적으로 추가적인 비용이 발생하기 때문입니다. 
더불어 memoization을 해놓는 다는 것은 결국 그 값을 메모리에 할당해놓고 있다는 뜻이기에 여기서도 추가적인 비용이 발생한다고 볼 수 있습니다. */
const Callback = () => {
    const [number, setNumber] = useState(1)
    const [dark, setDark] = useState(false)
  
    // const getItems = () => {
    //   return [number, number + 1, number + 2]
    // }
    // const getItems = useCallback(() => {
    //     return [number, number + 1, number + 2]
    //   }, [number])
    // const getItems = useCallback(
    //     increaseValue => {
    //       return [
    //         number + increaseValue,
    //         number + 1 + increaseValue,
    //         number + 2 + increaseValue,
    //       ]
    //     },
    //     [number]
    //   )
      const getItems = useMemo(
        () => increaseValue => {
          return [
            number + increaseValue,
            number + 1 + increaseValue,
            number + 2 + increaseValue,
          ]
        },
        [number]
      )
  
    const theme = {
      backgroundColor: dark ? "#333" : "#fff",
      color: dark ? "#fff" : "#333",
      margin:'100px auto',
      width:300
    }

    return (
      <div style={theme}>
        <input
          type="number"
          value={number}
          onChange={e => setNumber(parseInt(e.target.value))}
        />
        <button onClick={() => setDark(prevDark => !prevDark)}>테마 변경</button>
        <List getItems={getItems} />
      </div>
    )
};

export default Callback;