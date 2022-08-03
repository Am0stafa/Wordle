import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import { boardDefault } from '../components/words'

const AppContext = createContext()

export const AppContextProvider = ({children}) => {
    const [board,setBoard] = useState(boardDefault)
    const [currentAttempt,setCurrentAttempt] = useState({attempt: 0,letterPos:0,next:false})
    const correctWord = "RIGHT"
    
    const onEnter = ()=>{
        //! we want to check if the amount of letters in the current attempt is five
        if(currentAttempt.letterPos <5){
        alert("Incomplete")
        return
        }
        setCurrentAttempt((prev)=>({attempt:currentAttempt.attempt+1,letterPos:0,next:true}))

    }
    const onDelete = ()=>{
        if(currentAttempt.letterPos === 0) return
        const numBoard = [...board]
        numBoard[currentAttempt.attempt][currentAttempt.letterPos-1]=""
        setBoard(numBoard)
        setCurrentAttempt((prev)=>({...prev,letterPos:prev.letterPos-1,next:false}))
    }
    const  onSelectLetter=(keyVal)=>{
        if(currentAttempt.attempt > 4) return
        const numBoard = [...board]
        numBoard[currentAttempt.attempt][currentAttempt.letterPos]=keyVal
        setBoard(numBoard)
        setCurrentAttempt((prev)=>({...prev,letterPos:prev.letterPos+1,next:false}))
    
    }


    
  return (
    <AppContext.Provider value={{board,setBoard,currentAttempt,setCurrentAttempt,onEnter,onDelete,onSelectLetter,correctWord}}>
        {children}
    </AppContext.Provider>
  )
}

export default AppContext