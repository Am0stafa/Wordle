import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

const AppContext = createContext()

export const AppContextProvider = ({children}) => {
    const [test,setTest] = useState("text")
  return (
    <AppContext.Provider value={{test,setTest}}>
        {children}
    </AppContext.Provider>
  )
}

export default AppContext