import React from 'react'
import ReactDOM from 'react-dom'

function PokemonListItem({ className, component: Component = 'li', ...props }) {
  return (
    <Component
      className={['pokemon-list-item', className].join(' ')}
      {...props}
    />
  )
}

let characterData = [
  { name: 'Pikachu' },
  { name: 'Bulbasaur' },
  { name: 'Charmander' }
]

function App() {
  characterData.push({ name: 'Eve' })

  return (
    <div>
      <h1>
        <span role="img" aria-label="React Holiday Two">
          ⚛️🎄✌️
        </span>
        : Day 2
      </h1>
      <ul>
        {characterData.map((item, idx) => (
          <PokemonListItem key={idx}>{item.name}</PokemonListItem>
        ))}
      </ul>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
