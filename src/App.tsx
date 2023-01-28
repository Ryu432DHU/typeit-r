import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [name, setName] = useState("Tarou")
  const [lastName, setLastName] = useState("")

  return (
    <div className="App">
      <h1>React App</h1>
      <p>My name is {name}</p>
      <button onClick={e => console.log(e)}>Click me</button>
    </div>
  )
}

export default App
