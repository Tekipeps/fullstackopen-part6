let timer = null
export const setNotification = (content, time) => {
  return async (dispatch) => {
    dispatch({
      type: 'ADD_NOTIF',
      data: {
        content,
      },
    })
    clearTimeout(timer)
    timer = setTimeout(() => {
      dispatch({
        type: 'REMOVE_NOTIF',
      })
    }, time * 1000)
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
