import React, { useState, useEffect, createRef } from 'react';

const api = "http://localhost:8000/tasks";

let input = createRef();
const App = props => {
  
  let [items, setItem] = useState([]);

  useEffect(()=> {
    fetch(api).then(res => res.json()).then(json => {
      setItem(json)
    });
  },[]); //[] is for to stop request again and again for one request

  let add = () => {
    fetch(api, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({subject: input.current.value})
    }).then(res=> res.json())
    .then(json => {
      setItem([...items, json]);
    })
  }

  return (
    <div>
      <ul>
        { items.map(item => 
          <li key = {item._id}>
            {item.subject}
            <a href="#/" onClick={()=> {
              fetch(`${api}/${item._id}`, {method: 'DELETE'});
              setItem(items.filter( i => i._id !== item._id));
            }}>&times;</a>
          </li>
        )}
      </ul>
      <input type="text" ref={input} />
      <button onClick={add}>Add</button>
    </div>
  )
}

export default App;