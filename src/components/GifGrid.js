import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { getGifs } from '../helpers/getGifs'
import GifGridItem from './GifGridItem'

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([])

  useEffect(() => {
    getGifs(category).then(setImages)
  }, [category])

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map(image => (
          <GifGridItem key={image.id} {...image} />
        ))}
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string
}

export default GifGrid
