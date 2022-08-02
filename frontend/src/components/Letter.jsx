import React from 'react'

const Letter = ({letterPos,attemptVal}) => {
  //! inOrder to know which letter we are trying to guess we do that by accessing the board state at letterPos and attemptVal
  
  
  return (
    <div className="letter" id={letterPos+attemptVal*Math.floor(Math.random()*100)}>

    </div>
  )
}

export default Letter
//? both of the props are a way for us to get exactly what letters to represents this individual cell
//! what is the letterPos and what is the attemptVal
