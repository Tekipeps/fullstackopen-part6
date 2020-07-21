import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()
  const add = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(
      createAnecdote({
        content,
        votes: 0,
      })
    )
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={add}>
        <div>
          <input type="text" placeholder="New Anecdote" name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm