import { useState } from "react"
import Player from "./components/player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log"

function App() {
  const [gameTurn, setGameTurns] = useState([])
  const [activePlayer, setActivePlayer] = useState('X')
  function handleSelectSquare() {
    setActivePlayer((currentActivePlayer)=> currentActivePlayer === 'X' ? '0' : 'X')
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer == 'X'}></Player>
          <Player initialName="Player 2" symbol="0" isActive={activePlayer == '0'}></Player>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}></GameBoard>
      </div>
      <Log></Log>
    </main>
  )
}

export default App
