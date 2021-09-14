import React from 'react'
import Course from './components/Course'

// const Course = ({ course }) => { 
//     console.log(course)
//     return (
//       <div>
//         <Header course={course} />
//         <Content parts={course.parts} />
//         <Total parts={course.parts}></Total>
//       </div>
//     )
//   }


// const App = ({ course }) => {
//   return (
//     <div>
//       {course.map((course) => (
//         <Course course={course} key={course.id} />
//       ))}
     
      
//     </div>
//   );
// };

// ex 2.4
const App = ({ courses }) => {
  return (
    <div>
      <h1>Web development curriculum</h1>
      {courses.map((courses) => (
        <Course courses={courses} key={courses.id} />
      ))}
     
      
    </div>
  );
};

export default App;
