import './Board.css'
import { useState } from 'react'
import Square from './square/Square'
import type { SquareValue } from './square/Square'

export default function Board(){
    const [squares, setSquares] = useState<SquareValue[]>(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState<boolean>(true)
    
    function handleClick(i:number){
        if(squares[i] || winner){
            return ;
        }
        const nextSquares = squares.slice()
        nextSquares[i] = xIsNext ? "X": "O"
        setSquares(nextSquares)
        setXIsNext(!xIsNext)
    }
    
    const winner = evaluate_win(squares)
    let status;
    if (winner){
        status = "Winner " + winner
    }
    else{
        status = "Next player: "  + (xIsNext ? "X": "O")
    }
    return <>
    <div className='status'>{status}</div>
    <div className='board-row'>
        <Square  value={squares[0]} onSquareClick={() =>handleClick(0)}/>
        <Square  value={squares[1]} onSquareClick={()=> handleClick(1)}/>
        <Square  value={squares[2]} onSquareClick={()=> handleClick(2)}/>
    </div >
    <div className='board-row'>
        <Square  value={squares[3]} onSquareClick={()=> handleClick(3)}/>
        <Square  value={squares[4]} onSquareClick={()=> handleClick(4)}/>
        <Square  value={squares[5]} onSquareClick={()=> handleClick(5)}/>
    </div>
    <div className='board-row'>
        <Square  value={squares[6]} onSquareClick={()=> handleClick(6)}/>
        <Square  value={squares[7]} onSquareClick={()=> handleClick(7)}/>
        <Square  value={squares[8]} onSquareClick={()=> handleClick(8)}/>
    </div>
    </>

    function evaluate_win(squares: SquareValue[]){
        const winning_positions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
        for (let i=0; i< winning_positions.length; i++){
            const [a, b, c] = winning_positions[i]
            if (squares[a] && squares[a]==squares[b] && squares[a]==squares[c]){
                return squares[a]
            }
            
        }
    }
}

