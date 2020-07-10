export const getGifs = async category => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=vFZNjEwkQVq9TPbw5gxNjA5zeqxEZmbW`
  const response = await fetch(url)
  const { data } = await response.json()
  const gifs = data.map(({ id, title, images }) => {
    return {
      id: id,
      title: title,
      url: images?.downsized_medium.url
    }
  })
  return gifs
}
