/* eslint-disable no-unused-vars */
import { useState } from "react"

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]
// eslint-disable-next-line react/prop-types
export default function GameBoard({ onSelectPlayer, board }) {

    let gameBoard = board;

    return <ol id="game-board">
        {
            gameBoard.map((row, rowIndex) =>
                <li key={rowIndex}>
                    <ol >
                        {row.map((playerSymbol, colIndex) =>
                            <li key={colIndex}>
                                <button onClick={() => { onSelectPlayer(rowIndex, colIndex) }} disabled={playerSymbol !== null}>
                                    {playerSymbol}
                                </button>
                            </li>)
                        }
                    </ol>
                </li>)
        }
    </ol>
}