import { WT } from './wt.min.js'

WT({
  element: document.querySelector('.wt'),
  commands: {
    about() { return 'I am wt, the lightweight terminal emulator.' },
    creator() { return 'Sany has created me.' },
    github() { open('https://github.com/often/wt') },
    say(...text)
    {
      if (text.length) return text.join(' ')
      else return 'missing text'
    },
    reverse(word)
    {
      if (word) return word.split('').reverse().join('')
      else return 'missing word'
    },
    add(a, b)
    {
      if (a && b) return `${a}+${b} = ${Number(a) + Number(b)}`
      else return 'missing two arguments'
    },
    sub(a, b)
    {
      if (a && b) return `${a}-${b} = ${Number(a) - Number(b)}`
      else return 'missing two arguments'
    },
    x(a, b)
    {
      if (a && b) return `${a}*${b} = ${Number(a) * Number(b)}`
      else return 'missing two arguments'
    },
    div(a, b)
    {
      if (a && b) return `${a}/${b} = ${Number(a) / Number(b)}`
      else return 'missing two arguments'
    },
    cat()
    {
      open('https://cataas.com/cat')
      return 'meow'
    },
    async joke()
    {
      const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single')
      const { joke } = await response.json()
      
      return joke
    },
    rr() { open('https://www.youtube.com/watch?v=dQw4w9WgXcQ') }
  },
  help: true,
  clear: true
})
