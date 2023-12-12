import { useState } from 'react'
import './App.css'
import Input from './Input'
import Task from './Task';
function App() {

  let [todos, setTodos] = useState([]);
  
  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  }
  
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const handleDone = (id) => {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        return (
          {
            ...todo,
            complete: !todo.complete
          }
        )
      }
      else {
        return todo;
      }
    }))
  }

  const [showText, setShowText] = useState("all");
  const showData = (data) => {
    setShowText(data);
  }

  if (showText === "active") {
    todos = todos.filter((todo) => !todo.complete)
  } else if (showText === "done") {
    todos = todos.filter((todo) => todo.complete )
  } else if (showText ==="deleteAll"){
    todos=[]
  }
  const finishAll=()=>{
     
    setTodos(todos.map((todo) => {
      return (
        {
          ...todo,
          complete: !todo.complete
        }
      )
    }))
    }

  console.log(todos)
  return (
    <div className='project'>
      <Input Add={ addTodo } />
      <div className='btns-to-show'>
        <button onClick={ () => showData("all") }>All Tasks</button>
        <button onClick={ () => showData("active") }>Activated Tasks</button>
        <button onClick={ () => showData("done") }>completed Tasks</button>
        <button onClick={ () => showData("deleteAll") }>Remove All</button>
        <button onClick={ finishAll }>finish All</button>
      </div>
      {
        todos.map((todo) => {
          return (
            <Task key={ todo.id } task={ todo } delete={ () => handleDelete(todo.id) } done={ () => handleDone(todo.id) } />
          )
        }).reverse()
      }
    </div>
  )
}

export default App
