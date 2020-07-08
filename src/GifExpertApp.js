import React, { useState } from 'react'

const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    'One Puch',
    'Samurai X',
    'Dragon Ball'
  ])

  const handleAdd = () => {
    setCategories([...categories, 'HunterXHunter'])
  }

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
      <button onClick={handleAdd}>Agregar</button>
      <ol>
        {categories.map(category => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  )
}

export default GifExpertApp
