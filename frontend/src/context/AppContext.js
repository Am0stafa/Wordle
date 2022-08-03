import React, { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import { boardDefault,genWord } from '../components/words'

const AppContext = createContext()

export const AppContextProvider = ({children}) => {
    const [board,setBoard] = useState(boardDefault)
    const [currentAttempt,setCurrentAttempt] = useState({attempt: 0,letterPos:0,next:false})
    const [word, setWord] = useState("")
    const [disabledLetters, setDisabledLetters] = useState([]);
    const [gameOver, setGameOver] = useState({
        gameOver: false,
        guessedWord: false,
    });


    useEffect(() => {
        const get =async () => {
            const w = await genWord()
            setWord(w)
            localStorage.setItem("word", w)
        }
        get()
    }, []);


    const onEnter = ()=>{
        
        if(currentAttempt.letterPos < 5){
            alert("Incomplete")
            return
        }
        if(currentAttempt.letterPos > 5){
            const fix = [...board]
            fix[currentAttempt.attempt].length = 5
            setBoard(fix)
        }
        
        //! we first need to form a word with the letters of these attempt
        let currWord="";
        for (let i = 0; i < 5; i++) {
                currWord+=board[currentAttempt.attempt][i]
        }
        
        if(word.toLowerCase() === currWord.toLowerCase()){
            setGameOver({ gameOver: true, guessedWord: true });

        }
        
        if (currentAttempt.attempt === 5) {
          setGameOver({ gameOver: true, guessedWord: false });
          return;
        }
        setCurrentAttempt((prev)=>({attempt:prev.attempt+1,letterPos:0,next:true}))
        console.log(currentAttempt);

    }
    const onDelete = ()=>{
        if(currentAttempt.letterPos === 0) return
        const numBoard = [...board]
        numBoard[currentAttempt.attempt][currentAttempt.letterPos-1]=""
        setBoard(numBoard)
        setCurrentAttempt((prev)=>({...prev,letterPos:prev.letterPos-1,next:false}))
    }
    const  onSelectLetter=(keyVal)=>{
        if(currentAttempt.attempt > 5) return
        
        const numBoard = [...board]
        numBoard[currentAttempt.attempt][currentAttempt.letterPos]=keyVal
        setBoard(numBoard)
        setCurrentAttempt((prev)=>({...prev,letterPos:prev.letterPos+1,next:false}))
    
    }


    
  return (
    <AppContext.Provider value={{board,setBoard,currentAttempt,setCurrentAttempt,onEnter,onDelete,onSelectLetter,word, setWord,disabledLetters, setDisabledLetters,gameOver, setGameOver}}>
        {children}
    </AppContext.Provider>
  )
}

export default AppContext