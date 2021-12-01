import anecdoteService from '../services/anecdotes'

// const anecdotesAtStart = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// ]

// const getId = () => (100000 * Math.random()).toFixed(0)

// const asObject = (anecdote) => {
//   return {
//     type: 'ANECDOTE',
//     content: anecdote,
//     id: getId(),
//     votes: 0
//   }
// }
// ex 6.3 adding votes
// export const toggleVotes = (id) => {
//   return {
//     type: 'ADD_VOTES',
//     data: { id }
//   }
// }

//  6.17 voting to the backend
export const toggleVotes = (anecdote) => {
  return async dispatch => {
    const voteAn = await anecdoteService.addVote({ ...anecdote, votes: anecdote.votes + 1 })
    dispatch ({
      type: 'ADD_VOTES',
      data: voteAn
    })
    
  }
}

// ex 6.4 adding new anecdote
// export const createAnecdote = (data) => {
//   return {
//     type: 'NEW_ANECDOTE',
//     data
//     // data: {
//     //   content: content,
//     //   id: getId(),
//     //   votes: 0
//     // }
    
//   }
// }
// ex 6.16
export const createAnecdote = data => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(data)
    dispatch ({
      type: 'NEW_ANECDOTE',
      data: newAnecdote,
    })
  }
}


// ex 6.15
export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
  }
}



// const initialState = anecdotesAtStart.map(asObject)

const anecdoteReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch (action.type) {
    case 'NEW_ANECDOTE':
        // return state.concat(action.data)
        return [...state, action.data]
    case 'INIT_ANECDOTES':
          return action.data
    case 'ADD_VOTES': {
      const id = action.data.id
        const anecdoteToVote = state.find(a => a.id === id)
        const votedAnecdote = { 
          ...anecdoteToVote, 
          votes: anecdoteToVote.votes + 1
        }
        return state.map(anecdote =>
          anecdote.id !== id ? anecdote : votedAnecdote 
        )
       }
     default: 
     return state
  }
}

export default anecdoteReducer