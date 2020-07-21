export const addNotification = (content) => {
  return {
    type: 'ADD_NOTIF',
    data: {
      content,
    },
  }
}

export const removeNotification = () => {
  return {
    type: 'REMOVE_NOTIF',
  }
}

const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case 'ADD_NOTIF':
      return `you voted ${action.data.content}`
    case 'REMOVE_NOTIF':
      return null
    default:
      return state
  }
}

export default notificationReducer
