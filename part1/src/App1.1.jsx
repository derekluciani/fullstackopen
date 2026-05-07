const App = () => {

  const Header = (props) => {
    return (
      <div>
        <h1>{props.content}</h1>
      </div>
    )
  }
  const Content = (props) => {
    return (
      <div>
        <p>{props.content}{props.num}</p>
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
      <Content content='Fundamentals of React' num=' 10'></Content>
      <Content content='Using props to pass data' num=' 7'></Content>
      <Content content='State of a component' num=' 14'></Content>
      <Total content='Number of exercises '></Total>
    </>
  )
}
