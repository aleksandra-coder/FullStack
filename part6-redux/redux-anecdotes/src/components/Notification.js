
import React from 'react'
// import { useSelector } from 'react-redux'
import { connect } from 'react-redux'
// import { showMessage, hideMessage } from '../reducers/notoficationReducer'

// ex 6.19 using connect
const Notification = (props) => {
  
  // const notification = useSelector(state => state.notification)
  

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return props.notification
   ? <div style={style}>
      {props.notification}
    </div>
    : null 
  
  }

const mapStateToProps = (state) => {
  // const notification = () => {
      return {
        notification: state.notification
      } 
} 

  // return {
  //   notification: state.notification,
  //   filter: state.filter
  // }


// export default Notification

const ConnectedNotification = connect(mapStateToProps)(Notification)
export default ConnectedNotification