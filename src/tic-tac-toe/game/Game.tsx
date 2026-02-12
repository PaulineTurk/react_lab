import Board from "../board/Board"
import { useState } from 'react'
import type { SquareValue } from "../square/Square"

export default function Game(){
    const [history, setHistory]= useState([Array(9).fill(null)])
    const [currentMove, setCurrentMove] = useState<number>(0)
    const xIsNext = currentMove % 2 == 0
    const current_history = history[currentMove]

    function handlePlay(nextSquares: SquareValue[]){
        const nextHistory = [...history.slice(0, currentMove+1), nextSquares]
        setHistory(nextHistory)
        setCurrentMove(nextHistory.length -1)
    }

    function jumpTo(nextMove: number){
        setCurrentMove(nextMove)
    }

    const moves = history.map((_, move) => {
        let description
        if (move > 0){
            description = "Go to move " + move
        }
        else{
            description = "Go to game start"
        }
        return <li key={move}>
            <button onClick={()=> jumpTo(move)}> {description} </button>
        </li>
    })

    return <>
    <Board xIsNext= {xIsNext} current_history={current_history} onPlay={(nextSquares) => handlePlay(nextSquares)}></Board>
    <ol> {moves} </ol>
    </>

}