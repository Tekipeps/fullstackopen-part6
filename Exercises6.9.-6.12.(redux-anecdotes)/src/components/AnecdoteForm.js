import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () => {
  const dispatch = useDispatch()
  const add = async (event) => {
    event.preventDefault()
    try {
      const anecdote = event.target.anecdote.value
      event.target.anecdote.value = ''
      const newAnecdote = await anecdoteService.create({
        content: anecdote,
        votes: 0,
      })
      dispatch(createAnecdote(newAnecdote))
    } catch (error) {
      console.log(error)
    }
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
