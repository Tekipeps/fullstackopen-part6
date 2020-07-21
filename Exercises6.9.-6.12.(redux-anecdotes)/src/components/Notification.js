import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeNotification } from '../reducers/notificationReducer'

const Notification = () => {
  const notification = useSelector((store) => store.notification)
  const dispatch = useDispatch()
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  }
  if (notification.show) {
    setTimeout(() => {
      dispatch(removeNotification())
    }, 5000)
  }
  return (
    <div style={notification.show ? style : { display: 'none' }}>
      {notification.message}
    </div>
  )
}

export default Notification
