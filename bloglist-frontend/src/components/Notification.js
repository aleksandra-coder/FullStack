/* eslint-disable linebreak-style */
import React from 'react'

const Notification = ({ message }) => {

  if (message === null) {
    return null
  }

  return (
    <div className={message.type} id="error">
      {message.title}
    </div>
  )
}

export default Notification
