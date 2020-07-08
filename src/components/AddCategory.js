import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = props => {
  const [inputValue, setInputValue] = useState('Hola mundo')

  const handleInputChange = e => setInputValue(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>{inputValue}</h1>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  )
}

AddCategory.propTypes = {}

export default AddCategory
