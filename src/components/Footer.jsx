import React from 'react'
import { FaFacebookSquare,FaInstagramSquare,FaYoutube } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=' flex mt-2  justify-between items-center'>
      <p className='text-xs md:text-sm'>@2023 Lamania. All rights reserved</p>
      <div className='flex justify-bwtween gap-2 '>
      <FaFacebookSquare width={20} height={10} className="text-blue-800"/>
      <FaInstagramSquare width={20} height={10} className="text-pink-500"/>
      <FaSquareTwitter width={20} height={10} className="text-blue-400"/>
      <FaYoutube width={20} height={10} className="text-red-600"/>
      </div>

    </footer>
  )
}

export default Footer