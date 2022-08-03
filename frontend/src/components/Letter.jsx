import React, { useContext, useEffect } from 'react'
import AppContext from '../context/AppContext'

const Letter = ({letterPos,attemptVal}) => {
  //! inOrder to know which letter we are trying to guess we do that by accessing the board state at letterPos and attemptVal
  const {board,word,currentAttempt,disabledLetters, setDisabledLetters} = useContext(AppContext)
  const letter = board[attemptVal][letterPos]
  const correct = word.toUpperCase()[letterPos] === letter
  const almost = !correct && letter !== "" && word.includes(letter.toLowerCase()) 
  const letterState = currentAttempt.attempt > attemptVal && (correct ? "correct":almost ? "almost" : "error");

  useEffect(() => {
   if(letter !=="" && !correct && !almost) {
    setDisabledLetters((prev)=>[...prev,letter])
   }
   
   
  }, [currentAttempt.attempt])
  
  
  
  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  )
}

export default Letter
//? both of the props are a way for us to get exactly what letters to represents this individual cell
//! what is the letterPos and what is the attemptVal
