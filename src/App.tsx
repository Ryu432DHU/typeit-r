import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [name, setName] = useState("Tarou")
  const [lastName, setLastName] = useState("")

  return (
    <div className="App">
      <h1>React App</h1>
      <p>My name is {name} {lastName}</p>
      { lastName === ""
        ? <p>You haven't set the last name</p>
        : <p>You've already set the last name!</p> 
      }
      <button onClick={() => setLastName("Yamada")}>Set the last name</button>
    </div>
  )
}

export default App
