'use client'
import React,{useState,createContext} from 'react'
export const DarkModeContext = createContext()
export const ThemeProvider = ({children}) => {
 
  const [isDark,setIsDark] = useState(false)
  const toggleDarkMode = ()=>{
    setIsDark(prev => !prev)
  }
  return (
    <DarkModeContext.Provider value={{toggleDarkMode, isDark}}>
      {children}
    </DarkModeContext.Provider>
  )
}
