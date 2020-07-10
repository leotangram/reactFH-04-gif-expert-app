import React from 'react'
import PropTypes from 'prop-types'

const GifGrid = ({ category }) => {
  const getGifs = (async () => {
    const url = `https://api.giphy.com/v1/gifs/search?q=Rick and Morty&limit=10&api_key=vFZNjEwkQVq9TPbw5gxNjA5zeqxEZmbW`
    const response = await fetch(url)
    const { data } = await response.json

    const gifs = data.map(({ id, title, images }) => {
      return {
        id: id,
        title: title,
        url: images?.downsized_medium.url
      }
    })
  })()

  return (
    <div>
      <h2>{category}</h2>
    </div>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string
}

export default GifGrid
