import './index.css';
import { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)

  const incByOne = () => setCounter(counter + 1)
  const decByOne = () => setCounter(counter - 1)
  const reset = () => setCounter(0)

  const Button = ({ onClick, text }) =>
      <button onClick={onClick}>{text}</button>

  const Display = ({ counter }) => <div>{counter}</div>

  return (
    <>
      <Display counter={counter} />
      <Button onClick={decByOne} text='–' />
      <Button onClick={incByOne} text='+' />
      <Button onClick={reset} text='reset' />
    </>
  )
}
export default App
//App.jsx is the parent component that passes to 'main.jsx'
