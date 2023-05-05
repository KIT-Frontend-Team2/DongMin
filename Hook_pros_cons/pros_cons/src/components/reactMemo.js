import React from 'react';

import MemoizedMyComponent from './MemoizedMyComponent';

const ReactMemo = () => {
  const [name, setName] = React.useState('John Doe');

  return (
    <div>
      <MemoizedMyComponent name={name} />
      <button onClick={() => setName('Jane Doe')}>Change Name</button>
    </div>
  );
};

export default ReactMemo;