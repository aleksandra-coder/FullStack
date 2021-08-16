import React from 'react';

const Header = (props) => {
  console.log(props)
  return (
    <div>
      {/* ex 1.4, 1.5 */}
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <p>
      {/* ex 1.3 */}
      {/* {props.name} {props.exercises} */}
      {/* ex 1.4, 1.5 */}
      {props.name} {props.exercises}
    </p>
  )
}
// const Content = (props) => {
//   console.log(props)
//   return (
//     <div>
//       <p>
//         {props.parts}
//       </p>
//       {/* <p>
//         {props.part2}
//       </p>
//       <p>
//         {props.part3}
//       </p> */}
//     </div>
//   )
// }

const Content = (props) => {
  console.log(props)
  return (
    <div>
      {/* ex 1.3 */}
      {/* <Part name = {props.name} exercises = {props.exercises}/> */}
      
      {/* ex 1.4, 1.5 */}
      <Part name = {props.parts[0].name} exercises = {props.parts[0].exercises}/>
      <Part name = {props.parts[1].name} exercises = {props.parts[1].exercises}/>
      <Part name = {props.parts[2].name} exercises = {props.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      {/* ex 1.3 */}
      {/* <p>Number of exercises {props.exercises}</p> */}
      {/* ex 1.4, 1.5 */}
     <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </div>
  )
}

const App = () => {
  // ex 1.3
  // const course = 'Half Stack application development'
  // const part1 = {
  //   name: 'Fundamentals of React',
  //   exercises: 10
  // }
  // const part2 = {
  //   name: 'Using props to pass data',
  //   exercises: 7
  // }
  // const part3 = {
  //   name: 'State of a component',
  //   exercises: 14
  // }
  // ex 1.4
//   const course = 'Half Stack application development'
//   const parts = [
//     {
//     name: 'Fundamentals of React',
//     exercises: 10
//   },
//    {
//     name: 'Using props to pass data',
//     exercises: 7
//   },
//    {
//     name: 'State of a component',
//     exercises: 14
//   }
// ]

// ex 1.5
const course = {
  name: 'Half Stack application development',
  parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
}


  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14
  return (
    <div>
      {/* ex 1.3 */}
      {/* <Header course={course}/>
      <Content name={part1.name} exercises={part1.exercises}/>
      <Content name={part2.name} exercises={part2.exercises}/>
      <Content name={part3.name} exercises={part3.exercises}/>
      <Total exercises={part1.exercises + part2.exercises + part3.exercises}/> */}
      
      {/* ex 1.4 */}
      {/* <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/> */}
      
      {/* ex 1.5 */}
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
      
      
      {/* <Content part2={part2}/>
      <Content part3={part3}/> */}

      {/* <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/> */}
      {/* <Total exercises2={exercises2}/>
      <Total exercises3={exercises3}/>

      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
  <p>Number of exercises {exercises1 + exercises2 + exercises3}</p> */}
    </div>
  )
}

export default App;
