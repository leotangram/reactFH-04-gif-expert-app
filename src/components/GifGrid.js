import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem'

const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([])
  const { data: images, loading } = useFetchGifs(category)

  // useEffect(() => {
  //   getGifs(category).then(setImages)
  // }, [category])

  return (
    <>
      <h3>{category}</h3>
      {loading && <p>Cargando</p>}
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
