/* eslint-disable no-unused-vars */
import { useState } from "react"

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]
// eslint-disable-next-line react/prop-types
export default function GameBoard({ onSelectPlayer, turns }) {

    let gameBoard = initialGameBoard;

    for (const turn of turns) {
        const { square, player } = turn
        const { row, col } = square

        gameBoard[row][col] = player
    }
    // const [gameBoard, setGameBoard] = useState(initialGameBoard)
    // const handleSelectSquare = (rowIndex, colIndex) => {
    //     setGameBoard((prevGameBoard) => {
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
    //         updatedBoard[rowIndex][colIndex] = activePlayer

    //         return updatedBoard
    //     })
    //     onSelectPlayer()
    // }
    return <ol id="game-board">
        {
            gameBoard.map((row, rowIndex) =>
                <li key={rowIndex}>
                    <ol >
                        {row.map((playerIndex, colIndex) =>
                            <li key={colIndex}>
                                <button onClick={() => { onSelectPlayer(rowIndex, colIndex) }}>
                                    {playerIndex}
                                </button>
                            </li>)
                        }
                    </ol>
                </li>)
        }
    </ol>
}