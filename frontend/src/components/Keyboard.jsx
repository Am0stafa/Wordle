import React, { useCallback, useContext } from 'react'
import { useEffect } from 'react';
import AppContext from '../context/AppContext';
import Key from './Key';

const KeyBoard = () => {
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];
  const {onEnter,onDelete,onSelectLetter,currentAttempt} = useContext(AppContext)

  const handleKeyboard = useCallback((e)=>{
    if (e.key === "Enter") {
      onEnter();
    } else if (e.key === "Backspace") {
      onDelete();
    } else {
      //! rather than having an big switch statement for each key we will loop through the keys[n] arrays and then check if the key pressed equal to one of these keys so we call on select for this key
      keys1.forEach(key =>{
        if(e.key.toLowerCase() === key.toLowerCase()) onSelectLetter(key);
      })
      keys2.forEach(key =>{
        if(e.key.toLowerCase() === key.toLowerCase()) onSelectLetter(key);
      })
      keys3.forEach(key =>{
        if(e.key.toLowerCase() === key.toLowerCase()) onSelectLetter(key);
      })
    
    }
  },[currentAttempt])
  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);
  
  
  return (
    <div className="keyboard">
     <div className="line1">{keys1.map((key) => <Key keyVal={key} key={key.length * Math.floor(Math.random() *90190)}/>)}</div>
     <div className="line2">{keys2.map((key) => <Key keyVal={key} key={key.length * Math.floor(Math.random() *232432)}/>)}</div>
     
     <div className="line3">
       <Key keyVal={"ENTER"} bigKey />
       {keys3.map((key) => <Key keyVal={key} key={key.length * Math.floor(Math.random() *789334)}/>)}
       <Key keyVal={"DELETE"} bigKey />
     </div>
    
    </div>
  )
}

export default KeyBoard
//! we will divide into three different key parts
