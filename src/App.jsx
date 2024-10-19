import { useState } from 'react'
import './App.css'
import GameBoard from './components/GameBoard'
import Player from "./components/Player"
import Logs from './components/Logs'
function App() {

  const [activePlayer, setActivePlayer] = useState('X')
  const [gameTurns, setGameTurns] = useState([])

  const handleSelectSquare = (rowIndex, colIndex) => {
    setActivePlayer((currentActivePlayer) => currentActivePlayer === 'X' ? 'O' : 'X')
    console.log(JSON.stringify(gameTurns))
    setGameTurns((prevTurns) => {
      let currentPlayer = 'X'
      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O'
      }

      const updateTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns
      ]

      return updateTurns
    })
  }


  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players" className='highlight-player'>
            <Player name="Player 1" symbol="X" isActive={activePlayer === 'X'} />
            <Player name="Player 2" symbol="O" isActive={activePlayer === 'O'} />
          </ol>
          <GameBoard onSelectPlayer={handleSelectSquare} turns={gameTurns} />
        </div>
        <Logs turns={gameTurns} />
      </main>
    </>
  )
}

export default App
