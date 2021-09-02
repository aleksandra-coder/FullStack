import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'

// changed into an array to behave like a function, so that map and reduce methods could be used:
// const course = [
// {
//   id: 1,
//   name: 'Half Stack application development',
//   parts: [
//     {
//       name: 'Fundamentals of React',
//       exercises: 10,
//       id: 1
//     },
//     {
//       name: 'Using props to pass data',
//       exercises: 7,
//       id: 2
//     },
//     {
//       name: 'State of a component',
//       exercises: 14,
//       id: 3
//     },
//     {
//       name: 'Redux',
//       exercises: 11,
//       id: 4
//     }
//   ]
// }
// ]

const courses = [
  {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }, 
  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }
]

ReactDOM.render(<App courses={courses}/>, document.getElementById('root'))

