import React, { useState } from 'react'
import AddCategory from './components/AddCategory'

const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    'One Puch',
    'Samurai X',
    'Dragon Ball'
  ])

  // const handleAdd = () => {
  //   setCategories([...categories, 'HunterXHunter'])
  // }

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory />
      <hr />
      <ol>
        {categories.map(category => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  )
}

export default GifExpertApp
