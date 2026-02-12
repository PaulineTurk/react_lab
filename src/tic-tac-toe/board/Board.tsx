import './Board.css'
import Square from '../square/Square'
import type { SquareValue } from '../square/Square'

interface BoardProps{
    xIsNext: boolean,
    current_history: SquareValue[],
    onPlay(nextSquare: SquareValue[]): void
}

export default function Board({xIsNext, current_history, onPlay}:BoardProps){
    
    function handleClick(i:number){
        if(current_history[i] || winner){
            return ;
        }
        const nextSquares = current_history.slice()
        nextSquares[i] = xIsNext ? "X": "O"
        onPlay(nextSquares)
    }
    
    const winner = evaluate_win(current_history)
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
        <Square  value={current_history[0]} onSquareClick={() =>handleClick(0)}/>
        <Square  value={current_history[1]} onSquareClick={()=> handleClick(1)}/>
        <Square  value={current_history[2]} onSquareClick={()=> handleClick(2)}/>
    </div >
    <div className='board-row'>
        <Square  value={current_history[3]} onSquareClick={()=> handleClick(3)}/>
        <Square  value={current_history[4]} onSquareClick={()=> handleClick(4)}/>
        <Square  value={current_history[5]} onSquareClick={()=> handleClick(5)}/>
    </div>
    <div className='board-row'>
        <Square  value={current_history[6]} onSquareClick={()=> handleClick(6)}/>
        <Square  value={current_history[7]} onSquareClick={()=> handleClick(7)}/>
        <Square  value={current_history[8]} onSquareClick={()=> handleClick(8)}/>
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

