import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    (async function () {
      const response = await fetch(`/api/message`);
      const data = await response.json(); // JSONとして取得
      console.log(data.message); // "Hello, from the API!" が表示される
      setData(data.message);

      fetch("https://your-function-app.azurewebsites.net/api/your-function", {
        method: "GET"
    })
    .then(response => response.json())
    .then(message => setMessage(message));
    
    })();
  }, []);

  return(
    <>
      <div>{data}</div>
      <div>{message}</div>
    </>
  );
}

export default App;