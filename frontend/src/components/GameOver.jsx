import React, { useContext } from "react";
import AppContext from '../context/AppContext';

function GameOver() {
    const {board,word,currentAttempt,gameOver, setGameOver} = useContext(AppContext)
    return (
    <div className="gameOver">
      <h3>
        {gameOver.guessedWord
          ? "You Correctly Guessed the Wordle"
          : "You Failed to Guess the Word"}
      </h3>
      <h1>Correct Word: {word}</h1>
          {gameOver.guessedWord && (
            <h3>You guessed in {currentAttempt.attempt} attempts</h3>
          )}
    </div>
  );
}

export default GameOver;