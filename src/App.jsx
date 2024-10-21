import { useState } from 'react'
import './App.css'
import GameBoard from './components/GameBoard'
import Player from "./components/Player"
import Logs from './components/Logs'
import { WINNING_COMBINATIONS } from './components/WINNING_COMBINATIONS'

import GameOver from './components/GameOver'

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]
function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X'
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O'
  }

  return currentPlayer
}


function App() {

  const [gameTurns, setGameTurns] = useState([])
  const activePlayer = deriveActivePlayer(gameTurns)



  let gameBoard = [...initialGameBoard.map(arr => [...arr])];

  for (const turn of gameTurns) {
    const { square, player } = turn
    const { row, col } = square

    gameBoard[row][col] = player
  }

  let winner;


  for (const combination of WINNING_COMBINATIONS) {
    const firstSqaureSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondSqaureSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdSqaureSymbol = gameBoard[combination[2].row][combination[2].column]

    if (firstSqaureSymbol && firstSqaureSymbol === secondSqaureSymbol && firstSqaureSymbol === thirdSqaureSymbol) {
      winner = firstSqaureSymbol
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner

  const handleSelectSquare = (rowIndex, colIndex) => {

    setGameTurns((prevTurns) => {

      const currentPlayer = deriveActivePlayer(prevTurns)

      const updateTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns
      ]

      return updateTurns
    })
  }


  const handleRematch = () => {
    // console.log("Calling")
    setGameTurns([])
  }


  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players" className='highlight-player'>
            <Player name="Player 1" symbol="X" isActive={activePlayer === 'X'} />
            <Player name="Player 2" symbol="O" isActive={activePlayer === 'O'} />
            {winner && `Hurray! ${winner} is won`}
          </ol>
          {(winner || hasDraw) && <GameOver winner={winner} rematch={handleRematch} />}
          <GameBoard onSelectPlayer={handleSelectSquare} board={gameBoard} />
        </div>
        <Logs turns={gameTurns} />
      </main>
    </>
  )
}

export default App
