import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import anecdoteReducer, { initializeAnecdotes }  from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notoficationReducer'
import filterReducer from './reducers/filterReducer'

import anecdoteService from './services/anecdotes'

// ex 6.9
const reducer = combineReducers({
    anecdote: anecdoteReducer,
    filter: filterReducer,
    notification: notificationReducer
  })
  

const store = createStore(
    reducer, 
    composeWithDevTools(
      applyMiddleware(thunk)
    )
    )

    anecdoteService.getAll().then(anecdotes =>
      // anecdotes.forEach(anecdote => {
      //   store.dispatch({ type: 'NEW_ANECDOTE', data: anecdote })
      // })
      store.dispatch(initializeAnecdotes(anecdotes))
    )


console.log(store.getState())

export default store