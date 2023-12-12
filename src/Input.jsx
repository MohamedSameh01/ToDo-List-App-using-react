/* eslint-disable react/prop-types */
// import "./App.css"
import './App.css'
import { useState } from 'react';
import shortid from 'shortid';
const Input = (props) => {
  
  const [text,setText]=useState("");
  
  const handleChange=(e)=>{
    setText(e.target.value);
  }
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    text !== "" && 
    props.Add({
      id: shortid.generate(),
      text: text,
      complete: false
    });
    setText("");
  }
  
  return (
    <form onSubmit={ handleSubmit } className="input" type="submit">
      <input type="text" placeholder="write your task ..." value={ text } onChange={handleChange}/>
        <button onClick={ handleSubmit } >   Add  </button>
    </form>
  )
}

export default Input