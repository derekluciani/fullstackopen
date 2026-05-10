import './index.css';
import { useState } from 'react'

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  //Every click is stored in a separate piece of state called allClicks that is initialized as an empty array
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    //When the left button is clicked, we add the letter L to the allClicks array
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
    setTotal(left + right)
  }
  const handleRightClick = () => {
    //the concat method, does not mutate the existing array but rather returns a new copy with the item added to it.
    setAll(allClicks.concat('R'))
    setRight(right + 1)
    setTotal(left + right)
  }
  return (
    <>
      <div className="buttons">
        {left}
        <button onClick={handleLeftClick}>left</button>
        <button onClick={handleRightClick}>right</button>
        {right}
      </div>
      <div>
        {/* join method joins all items into a single string, separated by the string passed as the function param.*/}
        <p>{allClicks.join(' ')}</p>
        <p>total clicks: {total}</p>
      </div>
    </>
  )
}

export default App
//App.jsx is the parent component that passes to 'main.jsx'
