import './index.css';

const App = () => {

  // HEADER content def
  const Header = () => {
    return <h1>Half Stack application development</h1>
  }

  // MAIN content def
  const Content = () => {
    const parts = [
      { name: 'Fundamentals of React: ', exercises: 10 },
      { name: 'Using props to pass data: ', exercises: 7 },
      { name: 'State of a component: ', exercises: 14 }
    ]
    const p1 = parts[0]
    const p2 = parts[1]
    const p3 = parts[2]

    return (
      <div>
        <p>{p1.name} {p1.exercises}</p>
        <p>{p2.name} {p2.exercises}</p>
        <p>{p3.name} {p3.exercises}</p>
      </div>
    )
  }

  // TOTAL exercises content def
  const Total = () => {
    let totalNum = 10+7+14
    return (
      <div>
        <p><span>Total exercises: </span>{totalNum}</p>
      </div>
    )
  }

  // RENDERED
  return (
    <div>
      <Header />
      <br />
      <Content />
      <br />
      <Total />
    </div>
  )
}

export default App
