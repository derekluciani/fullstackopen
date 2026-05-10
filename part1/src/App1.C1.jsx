import './index.css';

const Hello = ({ name, age }) => {
  //deconstructing values
  const bornYear = () => new Date().getFullYear() - age
  return (
    <div>
      <p>Hello {name='Derek'}, you are {age=41} years old</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello /><br />
    </div>
  )
}

export default App
