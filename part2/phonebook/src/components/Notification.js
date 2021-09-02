import React from 'react'
// ex. 2.18
const Notification = ({ message, errorMessage}) => {
    const style = {
        // conditional change style of color, when errormessage is true / error or false / success:
        color: errorMessage ? 'red' : 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
      };
    
    if (message === null ) {
      return null
    }
    
   
    return (
        <div style={style} >
          {message}
      </div>
    )
  }

  export default Notification