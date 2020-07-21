const getId = () => (100000 * Math.random()).toFixed(0)

export const voteAnecdote = (id) => {
  return {
    type: 'VOTE',
    data: { id },
  }
}

export const createAnecdote = (content) => {
  return {
    type: 'CREATE',
    data: {
      content,
      id: getId(),
      votes: 0,
    },
  }
}

export const initializeAnecdotes = (data) => {
  return {
    type: 'INIT_ANECDOTES',
    data: data,
  }
}

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'VOTE':
      return state.map((anecdote) =>
        anecdote.id === action.data.id
          ? { ...anecdote, votes: anecdote.votes + 1 }
          : anecdote
      )

    case 'CREATE':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      return action.data
    default:
      return state
  }
}

export default anecdoteReducer
