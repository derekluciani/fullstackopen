import './index.css';
import { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)

  //executes a function once the timer expires
  setTimeout(() => setCounter(counter + 1), 1000)

  return (
  //component body gets re-rendered every time `setCounter` func is called
    <div>{counter}</div>
  )
}

export default App
//App.jsx is the parent component that passes to 'main.jsx'
