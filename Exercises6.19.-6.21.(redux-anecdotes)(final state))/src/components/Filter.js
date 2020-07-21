import React from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../reducers/filterReducer'

const Filter = (props) => {
  const handleFilterChange = (event) => {
    props.setFilter(event.target.value)
  }
  return (
    <div>
      filter <input type="text" onChange={handleFilterChange} />
    </div>
  )
}

const mapDispatchToProps = {
  setFilter,
}

const connectedFilter = connect(null, mapDispatchToProps)(Filter)

export default connectedFilter
