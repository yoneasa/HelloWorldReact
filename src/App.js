import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const response = await fetch(`/api/message`);
      const data = await response.json(); // JSONとして取得
      console.log(data.message); // "Hello, from the API!" が表示される
      setData(data.message);
    })();
  }, []);

  return <div>{data}</div>;
}

export default App;