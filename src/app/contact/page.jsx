import Button from '@/components/Button'
import React from 'react'
import Image from 'next/image'

const Contact = () => {
  return (
    <div className='mb-auto overflow-auto'>
      <h2 className='text-center'>Let's Keep in Touch</h2>
      <div className='flex flex-col md:flex-row gap-8 md:gap-1 mt-14'>
        <div className='flex-1 relative min-h-44 cImgContainer'>
          <Image src="/contact.png" alt="Contact image" fill className="object-contain"/>
        </div>
        <form className='flex-1 flex flex-col gap-2 md:gap-5 px-5 md:px-0 items-start'>
          <input type="text" placeholder="name" className="border-4 px-3 py-3 w-full"/>
          <input type="email" placeholder='email' className="border-4 px-3 py-3 w-full" />
          <textarea rows={10} cols={30} placeholder="message" className='border-4 p-3 w-full'></textarea>
          <Button path="#" text="Send"/>
        </form>
      </div>
    </div>
  )
}

export default Contact