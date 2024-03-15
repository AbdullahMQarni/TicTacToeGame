import React from 'react'

function GameOver({winner, onRestart}) {
    return (
        <div id='game-over'>
            <h1>Game Over!</h1>
            {winner && <p>the winner is {winner}, congratulations</p>}
            {!winner && <p>ohhh, there is no winner play again</p>}
            <button onClick={onRestart}>{winner === 'X' ? <p>Rematch don't be coward Player O! </p>:<p>Rematch don't be coward Player X! </p>}</button>
        </div>
    )
}

export default GameOver