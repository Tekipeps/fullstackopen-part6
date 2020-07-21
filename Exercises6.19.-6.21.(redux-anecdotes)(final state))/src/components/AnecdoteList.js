import React from 'react'
import { connect } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
  const filter = props.filter
  const anecdotes = props.anecdotes
    .sort((a, b) => b.votes - a.votes)
    .filter((anecdote) => anecdote.content.toLowerCase().includes(filter))

  const vote = (anecdote) => {
    props.voteAnecdote(anecdote)
    props.setNotification(anecdote.content, 5)
  }
  return (
    <div>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  )
}
const mapStateToProps = (state) => {
  // sometimes it is useful to console log from mapStateToProps
  return {
    anecdotes: state.anecdotes,
    filter: state.filter,
  }
}
const mapDispatchToProps = {
  voteAnecdote,
  setNotification,
}
const connectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)
export default connectedAnecdoteList
