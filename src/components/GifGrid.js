import React from 'react'
import PropTypes from 'prop-types'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem'

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category)

  return (
    <>
      <h3 className="animate__animated animate__bounceInLeft">{category}</h3>
      {loading && <p className="animate__animated flash">Cargando</p>}
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
