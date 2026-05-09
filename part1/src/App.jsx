import './index.css';

const App = () => {

  const Course = () => {

    const Header = () => {
      return <h1>Half Stack application development</h1>
    }
    const parts = [
      { name: 'Fundamentals of React: ', exercises: 10 },
      { name: 'Using props to pass data: ', exercises: 7 },
      { name: 'State of a component: ', exercises: 14 }
    ]
    const Content = () => {
      return (
        <div>
          <p>{parts[0].name} {parts[0].exercises}</p>
          <p>{parts[1].name} {parts[1].exercises}</p>
          <p>{parts[2].name} {parts[2].exercises}</p>
        </div>
      )
    }
    const Total = () => {
      let sum = parts[0].exercises + parts[1].exercises + parts[2].exercises
      return (
      <p><span>Total exercises: </span>{sum}</p>
    )}
  return (
    <>
      <Header />
      <Content />
      <Total />
    </>
  )}

// APP RENDERED
return (
  <>
    <Course />
  </>
)}

export default App
