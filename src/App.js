import React from 'react';
import useState from 'react';

function App() {
  const value = 'World';
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    setCount((count) => count + 1);
  }

  return (
    <>
      <div>Hello {value}</div>
      <button onClick={clickHandler}>CLICK</button>
      <div>You clicked the button {count} times</div>
    </>
  );
}

export default App;
