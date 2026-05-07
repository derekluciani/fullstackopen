const App = () => {

  const Header = (props) => {
    return (
      <div>
        <h1>{props.content}</h1>
      </div>
    )
  }
  const Content = () => {
    const Part = (props) => {
      return (
        <>
          <p>{props.part1}{props.exercise1}</p>
          <p>{props.part2}{props.exercise2}</p>
          <p>{props.part3}{props.exercise3}</p>
        </>
      )
    }
    return (
      <div>
        <Part part1='Fundamentals of React' exercise1=' 10'></Part>
        <Part part2='Using props to pass data' exercise2=' 7'></Part>
        <Part part3='State of a component' exercise3=' 14'></Part>
      </div>
    )
  }
  const Total = (props) => {
    let totalNum = 10+7+14
    return (
      <div>
        <p>{props.content}{totalNum}</p>
      </div>
    )
  }

  return (
    <>
      <Header content='Half Stack application development'></Header>
      <Content></Content>
      <Total content='Number of exercises '></Total>
    </>
  )
}

export default App
