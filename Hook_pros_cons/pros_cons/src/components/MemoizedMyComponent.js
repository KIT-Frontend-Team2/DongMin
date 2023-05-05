import React from 'react';
const MyComponent = (props) => {
  console.log('MyComponent 렌더링');
  return <div>{props.name}</div>;
};

const MemoizedMyComponent = React.memo(MyComponent);

export default MemoizedMyComponent;
//React.memo의 사용법은 상당히 간단합니다. 그냥 컴포넌트를 한번 감싸주면 됩니다.

