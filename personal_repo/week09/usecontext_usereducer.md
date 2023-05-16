### useReducer

1. const [state명,dispatch] useReducer("import 해서 온 reducer를 적은 함수명",init값)

2. 함수를 작성할때 dispatch에 객체 형태로 넣어주는데, type을 통해서 어떤 것을 실행할지 결정해주는 type과 payload는 useReducer로 작성해준 컴 포넌트로 props처럼 전달해주는 값이라고 생각하면됨.

3. useReducer는 switch문을 사용하여 case에는 type값을 적어주고,
그 밑에는 부모 컴포넌트로 리턴시켜줄 변수(즉, state값)를 넣어주면 됨.

### useContext

1. createContext라는 것을 import 해주고,
import { createContext, useState } from 'react';

2. const DarkModeContext = createContext();
이렇게 변수를 지정해준 다음에, 변수명.Provider로 감싸주고, props처럼
 value = {{state,옆에 state를 사용하는 함수}} 와 같이 state와 상태변화시켜주는 함수 전달.

3. 감싸주고나서 children이라는 변수를 넣어 하위 컴포넌트로 넘겨준다는 것을 정의. 그러면 하위 컴포넌트에서 

  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
를 다시 사용하여 불러오면 사용이 그 컴포넌트 안에서 사용할 수 있다.
 ```
 export const DarkModeContext = createContext();


export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((mode) => !mode);
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

 ```

 