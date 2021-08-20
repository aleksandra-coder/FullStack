import React, { useState } from 'react'

const Button = ({handleClick, text}) => (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  )


// ex. 1.10
const Buttons = ({handleGood, handleNeutral, handleBad}) => {
  return (
    <div>
      <Button text='good' handleClick={handleGood}></Button>
      <Button text='neutral'handleClick={handleNeutral}></Button>
      <Button text='bad' handleClick={handleBad}></Button>
    </div>
  )
}
  
// ex. 1.6
// const HistoryGood = ({good}) => <div>good: {good}</div>

// const HistoryNeutral = ({neutral}) => <div>neutral: {neutral}</div>
  
// const HistoryBad = ({bad}) => <div>bad: {bad}</div>

// ex. 1.7
// const HistoryAll = ({all}) => <div>all: {all}</div>

// const HistoryAverage = ({average}) => <div>average: {average}</div>

// const HistoryPositive = ({positive}) => <div>positive: {positive} %</div>


// ex. 1.8 (1.10 1.11)
const StatisticLine = ({text, value}) => {
  return (
    <>
      <td>{text}</td> 
      <td>{value}</td>
    </>
  )
  }


// ex 1.9
const Stat = ({good, neutral, bad, all, average, positive}) => {
  if ((good === 0) && (neutral === 0) && (bad === 0)) {
    return (
      <div><p>No feedback given</p></div>
    )
  }
  else {
    return (
    <>
      {/* ex 1.10 1.11*/}
      <table>
        <tbody>
          <tr><StatisticLine text='good: ' value={good}></StatisticLine></tr>
          <tr><StatisticLine text='neutral: ' value={neutral}></StatisticLine></tr>
          <tr><StatisticLine text='bad: ' value={bad}></StatisticLine></tr>
          <tr><StatisticLine text='all: ' value={all}></StatisticLine></tr>
          <tr><StatisticLine text='average: ' value={average}></StatisticLine></tr>
          <tr><StatisticLine text='positive: ' value={positive}></StatisticLine></tr>
        </tbody>
      </table>
    </>
  )
  }
//   if (good != 0 && neutral === 0 & bad === 0) {
//     return (
//       <div><StatisticLine text="good" value ={good} /></div>
//     )
//   }
  
 }

const App = () => {
  // save clicks of each button to its own state
  //  ex. 1.6
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  // ex. 1.7
  const all = good + neutral + bad
  const average = (good + (neutral * 0) + (bad * -1))/ all 
  const positive = (good / all) * 100

  // ex. 1.6
  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      {/* ex 1.6 */}
      <h1>give feedback</h1>
      {/* ex. 1.10 */}
      <Buttons handleGood={handleGood} handleNeutral={handleNeutral} handleBad={handleBad}></Buttons>
      {/* <Button handleClick={handleGood} text='good'></Button>
      <Button handleClick={handleNeutral} text='neutral'></Button>
      <Button handleClick={handleBad} text='bad'></Button> */}
      <h2>StatisticLine</h2>
      {/* <HistoryGood good={good} ></HistoryGood>
      <HistoryNeutral neutral={neutral} ></HistoryNeutral>
      <HistoryBad bad={bad} ></HistoryBad>
      {/* ex. 1.7 */}
      {/* <HistoryAll all={all}></HistoryAll>
      <HistoryAverage average={average}></HistoryAverage>
      <HistoryPositive positive={positive}></HistoryPositive>  */}
      {/* ex. 1.8 */}
      {/* <StatisticLine text='good: ' value={good}></StatisticLine>
      <StatisticLine text='neutral: ' value={neutral}></StatisticLine>
      <StatisticLine text='bad: ' value={bad}></StatisticLine>
      <StatisticLine text='all: ' value={all}></StatisticLine>
      <StatisticLine text='average: ' value={average}></StatisticLine>
      <StatisticLine text='positive: ' value={positive}></StatisticLine> */}
      {/* ex 1.9 1.10 */}
      <Stat good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}></Stat>
      
    </div>
  )
}

export default App;