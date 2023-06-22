import React, { useEffect } from 'react';



function App() {

  const url = `http://localhost:3001/`;

  const sendD = () => {
    fetch(`${url}post`, {
      method: 'post', 
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ data: 'hello'})
    })
    .then((re) => re.json())
    .then((res: any) => console.log(res.data))
  }

  useEffect(() => {
    fetch(url)
    .then((re) => re.json())
    .then((res) => {
      console.log(res.data);
    });
  })

  return (
    <div onClick={() => sendD()}>
      hello world
    </div>
  );
}

export default App;
