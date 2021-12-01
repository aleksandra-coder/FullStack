
// ex 6.10
export const setMessage = notification => {
    return {
        type: 'SHOW_MESSAGE',
        notification,
    }
}

// export const setMessage = notification => {
//   return async dispatch => {
//     dispatch ({
//       type: 'SHOW_MESSAGE',
//       notification,
//     })
      
//   }
// }

export const hideMessage = () => {
    return {
        type: 'HIDE_MESSAGE',
        
    }
}


const initialState = null


const notificationReducer = (state = initialState, action) => {
    console.log('show', action)
    switch (action.type) {
    case 'SHOW_MESSAGE':
      return action.notification
    case 'HIDE_MESSAGE':
      return null
    default:
      return state
    }
  }
  

export default notificationReducer