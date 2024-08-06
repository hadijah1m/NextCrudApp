'use client'
import React,{useState} from 'react'
import Link from 'next/link'
import DarkModeToggle from './DarkModeToggle'
import { useSession } from 'next-auth/react'
import toast from 'react-hot-toast'
import {signOut } from 'next-auth/react';

 const Navbar = () => {
  const [isClicked,setIsClicked] = useState(false)
  const session = useSession()
  const links = [
    {name:"Home",link:'/',id:'home'},
    {name:"Portfolio",link:"/portfolio",id:"portfolio"},
    {name:"Blog",link:"/blog",id:"blog"},
    {name:"About",link:"/about",id:"about"},
    {name:"Contact",link:"/contact",id:"contact"},
    {name:"Dashboard",link:"/dashboard",id:"dashboard"}
  ]
  const toggle =() =>{
    setIsClicked(prev => !prev)
  }
  const handlesignOut = async()=>{
    try{
      await signOut('google') || await signOut()
      toast.success("signed Out")
    }catch(error){
      toast.error('sign out failed ')
    }
  }

  return (
    <nav className='flex justify-between items-center mt-10 mb-16 md:mb-20 text-md font-[450px]'>
      <h1 className=''>Lamania</h1>
      <DarkModeToggle/>
      <ul className='hidden md:flex justify-between gap-4 '>
        {links?.map(link => (
          <li key={link.id}>
            <Link href={link.link}>{link.name}</Link>
          </li>
        ))}
       {session.status == 'unauthenticated' ? ( <Link href ='/dashboard/login' className='bg-gray-400 border border-gray-500 text-white px-2 text-center text-sm'>Login</Link>)
       :( <button className='bg-gray-400 border border-gray-500 text-white px-2 text-center text-sm' onClick={handlesignOut}>Logout</button>)}
      </ul>
      <div className='md:hidden' >
        {isClicked? (
    
           <button onClick={toggle}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="size-6">
           <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button> 
       
    
        ):(
          <button onClick={toggle}> 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>   
         </button> 
        )}
      </div>
      {isClicked && (
        <div className='flex z-50 flex-col absolute top-20 right-0 w-2/3 h-1/3 p-3 justify-center items-center bg-gray-400 '>
        {links?.map(data => (
          <Link href={data.link} key={data.id} className="hover:bg-skyblue-400">{data.name}</Link>
        ))}
        </div> 
      )}
    </nav>
  )
}

export default Navbar