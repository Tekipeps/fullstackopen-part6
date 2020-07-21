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

const notificationReducer = (state = { message: ``, show: false }, action) => {
  switch (action.type) {
    case 'ADD_NOTIF':
      return { message: `you voted ${action.data.content}`, show: true }
    case 'REMOVE_NOTIF':
      return { message: ``, show: false }
    default:
      return state
  }
}

export default notificationReducer
