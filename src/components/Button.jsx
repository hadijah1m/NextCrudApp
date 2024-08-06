import Link from 'next/link'
import React from 'react'

const Button = ({path,text}) => {
  return (
    <Link className="bg-green-300 text-[#fff] p-4 rounded-md max-w-content" href={path}>{text}</Link>
  )
}

export default Button