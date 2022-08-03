import React, { useContext } from 'react'
import AppContext from '../context/AppContext'

const Key = ({keyVal, bigKey}) => {
    const {onEnter,onDelete,onSelectLetter} = useContext(AppContext)
    
    const selectLetter = ()=>{
        //! this is all the logic for selecting and adding the letter to the board
        if(keyVal === "ENTER"){
            onEnter();
        }
        else if(keyVal === "DELETE"){
            onDelete()
        }
        else{        
            onSelectLetter(keyVal)
        }
    }
    

  return (
    <div className="key" id={bigKey && "big"} onClick={selectLetter}>
        {keyVal}
    </div>
  )
}

export default Key