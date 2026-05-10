import './index.css';
import { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)
  const incByOne = () => setCounter(counter + 1)
  const decByOne = () => setCounter(counter - 1)
  const reset = () => setCounter(0)
  return (
    <div>
      <p>{counter}</p>
      <div className="btn-group">
        <button onClick={incByOne}>+</button>
        <button onClick={decByOne}>–</button>
        <button onClick={reset}>reset</button>
      </div>
    </div>
  )
}
export default App
//App.jsx is the parent component that passes to 'main.jsx'
