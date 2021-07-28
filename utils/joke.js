const getJoke = () => {
  const jokes = ['What? No frontend?', 'No frontend, but he make this site', '']
  const index = Math.floor(Math.random() * jokes.length)
  return jokes[index]
}

const getContactJoke = () => {
  const jokes = ['Those url must be clickable']
  const index = Math.floor(Math.random() * jokes.length)
  return jokes[index]
}

export { getJoke, getContactJoke }
