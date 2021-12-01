import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleVotes } from './../reducers/anecdoteReducer'
import { setMessage, hideMessage } from '../reducers/notoficationReducer'

const Anecdote = ({ anecdote, handleClick}) => {
 return (
   <div>
     {anecdote.content}
     has {anecdote.votes}
        <button onClick={handleClick}>vote</button>
   </div>
 )
}

// ex 6.8 
const Anecdotes = () => {
    const dispatch = useDispatch()
    // const anecdotes = useSelector(state => state.anecdotes) 
// ex 6.10 6.11
    const anecdotes = useSelector(({ filter, anecdote }) => {
        if ( filter === null ) {
          return anecdote
        }
        return filter  === 'SET_FILTER' 
          ? anecdote
          : anecdote.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
      })
    
    
    // const vote = (id) => {
    //     console.log('vote', id)
    //     dispatch(toggleVotes(id))
    //     dispatch(setMessage(`You voted for an anecdote`))
    //     setTimeout(() => {
    //       dispatch(hideMessage())
    //     }, 5000)
    //   }

    // ex 6.17 voting changes to the backend
    const vote = ( anecdote) => {
      console.log('vote', anecdote)
      dispatch(toggleVotes(anecdote))
      dispatch(setMessage(`You voted for an anecdote '${anecdote.content}'`))
      setTimeout(() => {
        dispatch(hideMessage())
      }, 5000)
    }
    

      const sortVotes = () => {
        anecdotes.sort((a,b) => b.votes - a.votes)
        console.log(anecdotes)
      }

return (
    <div>
         {sortVotes()}
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <Anecdote
           key={anecdote.id}
           anecdote={anecdote}
           handleClick={() => vote(anecdote)}/>
        </div>
      )}
    </div>
)
     
} 

export default Anecdotes