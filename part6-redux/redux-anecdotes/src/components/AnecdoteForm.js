import React from 'react'
import { connect } from 'react-redux' 
// import { useDispatch } from 'react-redux'
import { createAnecdote } from './../reducers/anecdoteReducer'
import { setMessage, hideMessage } from '../reducers/notoficationReducer'
// import anecdoteService from './../services/anecdotes'

// ex 6.7 ex 6.20 using connect
const NewAnecdote = (props) => {
  console.log(createAnecdote)
  console.log(props.createAnecdote)
    // const dispatch = useDispatch()

     const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    // const newAnecdote = await anecdoteService.createNew(content)
    // dispatch(createAnecdote(newAnecdote))
    // dispatch(createAnecdote(content))
    props.createAnecdote(content)
    props.setMessage(`New anecdote '${content}' was added!`)
    // dispatch(setMessage(`New anecdote '${content}' was added!`))
    setTimeout(() => {
      props.hideMessage()
      // dispatch(hideMessage())
    }, 5000)
  }

    return (
        <div>
            <h2>create new</h2>
        <form onSubmit={addAnecdote} >
          <div><input name="anecdote"/></div>
          <button type="submit">create</button>
        </form>
        </div>
    )
  }
  
  // export default NewAnecdote

  export default connect(
    null, 
    { createAnecdote, setMessage, hideMessage }
  )(NewAnecdote)