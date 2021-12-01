import React, {useEffect} from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'
// import anecdotes from '../services/anecdotes'
// import anecdoteService from './services/anecdotes'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  // useEffect(() => {
  //   anecdoteService
  //     .getAll().then(anecdotes => dispatch(initializeAnecdotes(anecdotes)))
  // }, [dispatch])
  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [dispatch])
   
  // const anecdotes = useSelector(state => state)
  // const dispatch = useDispatch()
// ex 6.6 action creators
  // const vote = (id) => {
  //   console.log('vote', id)
  //   dispatch(toggleVotes(id))
  // }

  // const addAnecdote = (event) => {
  //   event.preventDefault()
  //   const content = event.target.anecdote.value
  //   event.target.anecdote.value = ''
  //   dispatch(createAnecdote(content))
  // }

  // ex 6.5 sorting votes
  // const sortVotes = () => {
  //   anecdotes.sort((a,b) => b.votes - a.votes)
  //   console.log(anecdotes)
  // }

  return (
    <div>
      <h2>Anecdotes</h2>
      {/* {sortVotes()}
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )} */}
      <Notification></Notification>
      <Filter></Filter>
      <AnecdoteList></AnecdoteList>
      <AnecdoteForm></AnecdoteForm>
      {/* <h2>create new</h2>
      <form onSubmit={addAnecdote} >
        <div><input name="anecdote"/></div>
        <button type="submit">create</button>
      </form> */}
    </div>
  )
}

export default App