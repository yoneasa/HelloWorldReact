import React from 'react';
import { useState, useEffect } from 'react';

function App() {
  const value = 'World';
  const [count, setCount] = useState(0);
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { text } = await( await fetch(`/api/message`)).json();
      setData(text);
    })();
  });

  const clickHandler = () => {
    setCount((count) => count + 1);
  }

  return (
    <>
      <div>Hello {value}</div>
      <button onClick={clickHandler}>CLICK</button>
      <div>You clicked the button {count} times</div>
      <p style={{ color: 'red' }}>これは赤い文字です！</p>
      <div>DATA: {data}</div>
    </>
  );
}

export default App;
