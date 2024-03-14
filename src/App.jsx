import { useState } from "react"
import PlayerInfo from "./components/PlayerInfo"
import GameBoard from './components/GameBoard'
import Log from './components/Log'

function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);


  function handleClickSquare(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ?  'O' : 'X');
    setGameTurns((prevTurns) => {
      let currentPlayer = 'X'

      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O'
      }

      const updatedTurns = [
        {square: { row:rowIndex, col:colIndex }, player: currentPlayer},
        ...prevTurns
      ];
      return updatedTurns;
    })
  }

  return (
    <>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <PlayerInfo initialName={'player 1'} symbol={'X'} isActive={activePlayer === "X"} />
        <PlayerInfo initialName={'player 2'} symbol={'O'} isActive={activePlayer === "O"} />
      </ol>
      <GameBoard onClickSquare={handleClickSquare}  turns={gameTurns}/>
    </div>
    <Log turns={gameTurns} />
    </>
  )
}

export default App
