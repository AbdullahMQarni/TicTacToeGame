import { useState } from "react"
import PlayerInfo from "./components/PlayerInfo"
import GameBoard from './components/GameBoard'
import Log from './components/Log'
import { WINNING_COMBINATIONS } from './WINNING_COMBINATIONS'
import GameOver from "./components/GameOver"

const initialGameBoard = [
  [null,null,null],
  [null,null,null],
  [null,null,null],
];

function deriveActivePlayer(gameTurns){
  let currentPlayer = 'X'

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O'
  }

  return currentPlayer;
}




function App() {
  // const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);
  
  const activePlayer = deriveActivePlayer(gameTurns);
  
  
  let gameBoard = [...initialGameBoard.map(array => [...array])];
  
  for (const turn of gameTurns) {
      const {square, player}= turn; // Correct the property name here to 'square'
      const {row, col} = square; // Correct the property name here to 'square'
  
      gameBoard[row][col] = player;
  }

  let winner;
  
  for (const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]


    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = firstSquareSymbol
    }
  }

  let hasDraw = gameBoard.length === 9 && !winner;


  function handleClickSquare(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ?  'O' : 'X');
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns)

      const updatedTurns = [
        {square: { row:rowIndex, col:colIndex }, player: currentPlayer},
        ...prevTurns
      ];
      return updatedTurns;
    })
  }

  function gameRestart(){
    setGameTurns([])
  }

  return (
    <>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <PlayerInfo initialName={'player 1'} symbol={'X'} isActive={activePlayer === "X"} />
        <PlayerInfo initialName={'player 2'} symbol={'O'} isActive={activePlayer === "O"} />
      </ol>
      {(winner || hasDraw) && <GameOver winner={winner} onRestart={gameRestart} /> }
      <GameBoard onClickSquare={handleClickSquare}  board={gameBoard}/>
    </div>
    <Log turns={gameTurns} />
    </>
  )
}

export default App
