### useReduce
    1. state

 - 컴포넌트에서 사용할 상태

2. dispatch 함수

 - 첫번째 인자인 reducer 함수를 실행시킨다.

 - 컴포넌트 내에서 state의 업데이트를 일으키키 위해 사용하는 함수

3. reducer 함수

 - 컴포넌트 외부에서 state를 업데이트 하는 함수

 - 현재state, action 객체를 인자로 받아, 기존의 state를 대체하여 새로운 state를 반환하는 함수

4. initialState

 - 초기 state

5. init

 - 초기 함수 (초기 state를 조금 지연해서 생성하기 위해 사용)

 