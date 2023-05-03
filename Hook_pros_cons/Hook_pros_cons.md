# React hook 함수 장단점 정리

## Hook이란?
 - 우선 Hook은 리액트 16.8 버전에 새로 추가된 최신 기능으로, 클래스형 컴포넌트의 단점을 극복하고자 나온 함수형 컴포넌트에 대한 기능이다. 
 - Hook은 React의 개념보다 직관적인 API를 제공한다. 또한 상태에 관련된 로직을 재사용하기 위해 쉽게 만든다.
 -  state와 lifecycle과 같은 기능을 사용 가능하게 해준다.

<br>
<br>

### 리액트 특징을 훅함수는 최대한 활용한 것
- 선언적 (Declarative)이다<br>
👉🏻 리액트는 대화형 UI를 작성하기에 유리하다. 데이터가 변경되었을 때 효율적으로 렌더링을 수행할 수 있도록 한다.
- 컴포넌트 기반(Component-based)이다<br>
👉🏻 캡슐화된 컴포넌트가 스스로 상태를 관리하고 복잡한 UI도 효과적으로 구성할 수 있음
- 한 번 배워서 어디에서나 사용하기(Learn Once, Write Anywhere)<br>
👉🏻 기존 소스를 불필요하게 다시 작성하지 않고 새 기능을 개발 할 수 있다. Node서버에서 랜더링을 할 수도 있고, 온라인 웹에서도 사용 가능하다. RN(React Native)을 쓰면 모바일 앱도 만들 수 있다.
## Hook의 장점

### 더 짧은 성능과 짧은 코드

- 리액트에서 작성한 코드와 바벨을 이용해서 코드를 컴파일한 후에는 코드가 길어짐을 알 수 있다.

- 만약 공통적으로 적용해야 하는 wrapper 컴포넌트가 있다면 감싸서 작성하여 

- 클래스에서는 반복적이고 불필요한 느낌의 코드가 보이지 않습니다. 

- 로직을 한 곳으로 모을 수 있어서 가독성이 좋다

- 많은 라이브러리들도 훅으로만 나오고 있다.

- HOC 헬을 벗어 날 수 있다.
<br>

( HOC헬이란?
```
<Hoc1>
    <WithMousePosition>
        <WithWindowSize>
          <WithUserLocation>
            <SomeComponent />
          </WithUserLocation>
        </WithWindowSize>
    </WithMousePosition>
</Hoc1>
```

## 훅 함수를 활용한 렌더링

```
const WithHook = () => {
  const mousePosition = useMousePosition()
  const windowSizes = useWindowSize()
  const userLocation = useUserLocation()
  
  return (
    <SomeComponent
      mousePosition={mousePosition}
      windowSizes={windowSizes}
      userLocation={useLocation}
    >
  )
```
}
)
 
## Hook의 단점

- ### 호출되는 순서에 의존
hooks는 반복문, 조건문, 중첩된 함수 내에서 호출이 불가하다.
예를 들어 클릭하면 페이징되는 버튼을 구현하기 위해 useFetch를 사용하려고 한다면, react-async-hook 라이브러리를 사용하거나 custom hook을 만들어 해결해야 한다. hooks의 규칙을 따르기 위해 많은 리소스가 필요하고, 코드가 많아지면 복잡성이 증가한다.

- ### useEffect의 빈틈
useEffect는 두번째 인수로 dependency list를 받고, 하나의 값이라도 변경됐을 때 useEffect 내부의 로직을 실행하여 라이프 사이클을 흉내낸다. React에서 hooks' dependency array의 변경을 감지하기 위해 Object.js()메서드를 사용하는데, 대체로 원시 타입에 올바르게 작동한다고 한다. 참조형 데이터를 비교할 때는 렌더링 될 때 마다 참조 메모리 주소가 다르기 때문에 매번 실행될 것이다. useMemo를 사용하여 동일한 객체가 전달될 수 있도록 처리할 수 있지만, 개발자가 놓치고 넘어가기 쉬운 포인트인 것 같다.

- ### Hooks는 클로저에 의존적이다.
프로그램이 커질수록 Hooks가 많아지는데, 클로저는 복잡성을 증가시킨다. 최신상태가 아닌 클로저는 해결하기 어렵다.

출처: https://developerntraveler.tistory.com/146

----

<br>

## useState

#### | useState를 구현한 코드
 ```
    const MyReact = (function() {
  let _val // hold our state in module scope
  return {
    render(Component) {
      const Comp = Component()
      Comp.render()
      return Comp
    },
    useState(initialValue) {
      _val = _val || initialValue
      function setState(newVal) {
        _val = newVal
      }
      return [_val, setState]
    }
  }
})()
 ```
> 사용법  
> <br> &ensp; const [state, setState] = useState(initialState); 
> <br> &ensp; 밑에 식과 마찬가지로 이벤트함수에 연결해서 많이 사용한다.
```
export default function Profile () {
    const [name,setName] = useState('');
    return (
        <div>
            <p>{`name is ${name}`}</p>
            <input type='text' value={name} onChange={e=>setName(e.target.value)}></input>
        </div>
    )
}
```

   
 


⭐️ setState 는 새로운 값을 가지고 컴포넌트를 다시 불러줍니다.
<br>

⭐️ useState는 함수형 컴포넌트에서 상탯값을 관리하게 해줍니다.


> ### 장점

- 간결함: 함수형 컴포넌트를 사용하면 클래스 컴포넌트보다 더 간결한 코드를 작성할 수 있습니다. useState를 사용하면 상태 관리가 더욱 간편해집니다.

- 쉬운 상태 초기화: useState를 사용하면 상태 초기화가 쉬워집니다. 상태 변수를 초기화할 때 간단한 값이나 함수를 전달할 수 있습니다.

- 개별 상태 업데이트: useState를 사용하면 여러 상태를 독립적으로 업데이트할 수 있습니다. 이를 통해 관심사의 분리가 용이해지고 코드의 가독성이 향상됩니다.

- 커스텀 훅 작성 용이: useState를 사용하면 커스텀 훅을 작성하기 쉽습니다. 이를 통해 비슷한 로직이나 상태 관리를 재사용할 수 있어 코드의 중복을 줄일 수 있습니다. 

> ### 단점
- 비동기 업데이트: useState의 상태 업데이트는 비동기적으로 이루어집니다. 때문에 연속적인 상태 업데이트를 다루기 어려울 수 있으며, 이를 해결하기 위해 함수를 사용해야 할 수도 있습니다.

- 복잡한 상태 관리: useState는 간단한 상태 관리에 적합하지만, 상태가 복잡해지고 상태 간의 상호작용이 많아지면 코드가 복잡해질 수 있습니다. 이 경우, useReducer나 상태 관리 라이브러리(예: Redux)를 사용하는 것이 더 적합할 수 있습니다.

- 상태 변경 시 부수효과 처리: 상태 변경에 따른 부수 효과를 처리하기 위해서는 useEffect와 같은 훅을 사용해야 합니다. 이는 코드의 가독성을 떨어뜨릴 수 있습니다.

<br>
<br>

## useRef

> 특징<br>
useRef(매개변수)라는 함수를 호출하면 plain JavaScript object를 return하고, { current: 매개변수 }로 초기값이 설정됩니다.<br>
이렇게 useRef()를 호출해서 만들어진 object는 그 컴포넌트의 전체 라이프사이클 동안 유지가 됩니다.<br>
current의 값을 변경해도 re-render가 되지 않습니다.

> useRef 소스코드
```
    function useRef(initialValue) {
  const fiber = currentlyRenderingFiber;
  let ref;

  if (fiber.mode & HookEffect) {
    const current = fiber.alternate;
    if (current !== null) {
      // 이전에 생성된 ref 객체가 있는 경우 사용
      ref = current.memoizedState;
    } else {
      // 새로운 ref 객체를 생성
      ref = { current: initialValue };
      if (__DEV__) {
        Object.seal(ref);
      }
    }
  } else {
    // useRef가 이전에 호출된 경우, 동일한 ref 객체를 반환
    if (workInProgressHook === null) {
      if (currentHook === null) {
        // 새로운 ref 객체를 생성
        ref = { current: initialValue };
        if (__DEV__) {
          Object.seal(ref);
        }
      } else {
        // 이전에 생성된 ref 객체가 있는 경우 사용
        ref = currentHook.memoizedState;
      }
      mountWorkInProgressHook();
    } else {
      // 이전에 생성된 ref 객체가 있는 경우 사용
      ref = workInProgressHook.memoizedState;
      updateWorkInProgressHook();
    }
  }

  return ref;
}

```

### 장점:

- 직접 DOM 접근: useRef를 사용하면 DOM 엘리먼트에 직접 접근할 수 있습니다. 이를 통해 DOM 속성, 메소드에 접근하거나 변화를 줄 수 있습니다.<br>

- 지속적인 값 유지: useRef로 생성된 참조는 컴포넌트 렌더링 사이에도 값이 유지됩니다. 이를 통해 값의 변경 없이 이전 값에 접근할 수 있습니다.<br>

- 변경에 따른 렌더링 방지: useRef로 생성된 참조의 값이 변경되어도 컴포넌트가 리렌더링되지 않습니다. 이를 통해 필요하지 않은 렌더링을 방지할 수 있습니다.<br>
==> 이 부분에서 useState에서의 불필요한 렌더링을 방지

<br>

### 단점:

- 코드 복잡성: useRef를 사용하면 코드가 복잡해질 수 있습니다. 특히, DOM 조작을 많이 수행할 경우 코드의 가독성이 떨어질 수 있습니다..<br>

- 잘못된 사용으로 인한 성능 저하: useRef를 사용하여 DOM을 직접 조작하면, 리액트의 최적화 기능을 무시하게 되어 성능 저하가 발생할 수 있습니다. 따라서, 필요한 경우에만 사용해야 합니다..<br>

- 불필요한 사용: useRef의 사용을 과도하게 하면, 코드의 일관성이 떨어질 수 있습니다. 상태 관리나 부수 효과 처리에 적합한 훅(useState, useEffect 등)을 사용하는 것이 바람직합니다.

> ### 사용법
> useRef에서는 객체로 반환되어 console.log을 찍어보면 current라는 키값에 값이 담겨져 있다.<br>
> 따라서 inputRef.current 

```import React, { useRef } from 'react';

function TextInput() {
  const inputRef = useRef();

  const handleClick = () => {
    alert(`입력된 텍스트: ${inputRef.current.value}`);
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>텍스트 출력</button>
    </div>
  );
}

export default TextInput;```
