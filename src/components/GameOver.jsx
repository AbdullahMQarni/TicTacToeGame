import React from 'react'

function GameOver({winner, onRestart, player1Name, player2Name}) {
    return (
        <div id='game-over'>
            <h1>Game Over!</h1>
            {winner && <p>the winner is {winner}, congratulations</p>}
            {!winner && <p>ohhh, there is no winner play again</p>}
            <button onClick={onRestart}>{winner === player1Name ? <p>Rematch don't be coward {player2Name}! </p>:<p>Rematch don't be coward {player1Name}! </p>}</button>
        </div>
    )
}

export default GameOver