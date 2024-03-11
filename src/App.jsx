import { useState } from "react"
import PlayerInfo from "./components/PlayerInfo"
import GameBoard from './components/GameBoard'

function App() {
  const [activePlayer, setActivePlayer] = useState('X')

  function handleClickSquare() {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ?  'O' : 'X')
  }

  return (
    <>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <PlayerInfo initialName={'player 1'} symbol={'x'} isActive={activePlayer === "X"} />
        <PlayerInfo initialName={'player 2'} symbol={'O'} isActive={activePlayer === "O"} />
      </ol>
      <GameBoard onClickSquare={handleClickSquare}  activePlayerSymbol={activePlayer}/>
    </div>
    LOG
    </>
  )
}

export default App
