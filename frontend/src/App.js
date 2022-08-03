import { useContext } from 'react';
import './app.css'
import Board from './components/Board';
import GameOver from './components/GameOver';
import Keyboard from './components/Keyboard';
import AppContext from './context/AppContext';

function App() {
  const {board,word,currentAttempt,gameOver, setGameOver} = useContext(AppContext)

  return (
    <div className="App">
      <nav>
         <h1>Wordle</h1>
      </nav>
        <div className="game">
          <Board/>
          {gameOver.gameOver ? <GameOver /> : <Keyboard />}

        </div>
    </div>
  );
}

export default App;
