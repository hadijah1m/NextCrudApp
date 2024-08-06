"use client"
import React,{useState,useContext} from 'react'
import { DarkModeContext } from '@/context/ThemeProvider'

const DarkModeToggle = () => {
  const {toggle,isDark} = useContext(DarkModeContext)
  console.log(isDark)
  return (
    <div className='border rounded-lg border-green-500 w-17 px-1 relative'>
      <button onClick={toggle}>
        🌞
      </button>
      <button onClick={toggle}>🌙</button>
      <div className={`w-4 h-4 rounded-lg absolute bg-green-500 top-1 ${isDark? "right:1":"left-1"}`}></div>
    </div>
  )
}

export default DarkModeToggle