import React, { useState } from 'react'
import './App.css'
import Text from './data'

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    // console.log(amount);
    if(count <=0) amount = 1;
    if(count > 8) amount = 8
    setText(Text.splice(0, amount));
  };
  return (
    <main>
      <h1 clasName="text-center">Lorem Ipsum generator</h1>
      <div className="header">
        <form onSubmit={handleSubmit} clasName="form">
          <label>Number of Paragragh:</label>
          <input clasName="input" value={count} name="amount"     id="amount" onChange={(e) => setCount(e.target.value)} type="number" />
        <button className="btn">Generate Text</button>
        </form>
      </div>
      <article>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </article>
    </main>
  );
}
