const getJoke = () => {
  const jokes = [
    'What? No frontend?',
    'No frontend, how did he made this site?',
    'My head is in the cloud~',
    `Hi there. I'm climing here for years`,
    `No wonder why it's not responseive`,
  ]
  const index = Math.floor(Math.random() * jokes.length)
  return jokes[index]
}

const getContactJoke = () => {
  const jokes = ['Those url must be clickable', `Hello, hello, baby, you called? I can't hear a thing`]
  const index = Math.floor(Math.random() * jokes.length)
  return jokes[index]
}

export { getJoke, getContactJoke }
