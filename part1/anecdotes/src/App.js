import React, { useState } from 'react'

// ex 1.12
const Button = ({handleClick, text}) => (
  <div>
    <button onClick={handleClick}>{text}</button>
  </div>
)


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)

  // ex 1.12
  const getRandomAnecdote = () => {
    return setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  // ex 1.13
  const [votes, setVotes] = useState(anecdotes.map(() => 0))
  
  const Voting = () => {
    const copy = [...votes]
    copy[selected] +=1
    return setVotes(copy)
  }

  // ex 1.14
  const BestAnecdote = votes.indexOf(Math.max(...votes))
  

  return (
    <div>
      <h1>Anegdote of the Day</h1>
      {anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <Button handleClick={Voting} text='vote'/>
      <Button handleClick={getRandomAnecdote} text='next anecdote'/>
      <h2>Anecdote with most votes</h2>
      {/* ex 1.14 */}
      <p>{anecdotes[BestAnecdote]} has {votes[BestAnecdote]} votes</p>
    </div>
  )
}

export default App