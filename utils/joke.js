const getJoke = () => {
  const jokes = ['What? No frontend?', 'No frontend, but he make this site', '']
  const index = Math.floor(Math.random() * jokes.length)
  return jokes[index]
}

export default getJoke
