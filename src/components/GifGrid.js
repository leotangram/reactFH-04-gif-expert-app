import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import GifGridItem from './GifGridItem'

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([])

  useEffect(() => {
    getGifs()
  }, [])

  const getGifs = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?q=Rick and Morty&limit=10&api_key=vFZNjEwkQVq9TPbw5gxNjA5zeqxEZmbW`
    const response = await fetch(url)
    const { data } = await response.json()
    const gifs = data.map(({ id, title, images }) => {
      return {
        id: id,
        title: title,
        url: images?.downsized_medium.url
      }
    })
    setImages(gifs)
  }

  return (
    <div>
      <h2>{category}</h2>
      {images.map(image => (
        <GifGridItem key={image.id} {...image} />
      ))}
    </div>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string
}

export default GifGrid
