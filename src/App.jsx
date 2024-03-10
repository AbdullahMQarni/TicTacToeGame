import PlayerInfo from "./components/PlayerInfo"

function App() {
  

  return (
    <>
    <div id="game-container">
      <ol id="players">
        <PlayerInfo name={'player 1'} symbol={'x'} />
        <PlayerInfo name={'player 2'} symbol={'O'} />
      </ol>
    </div>
    </>
  )
}

export default App
