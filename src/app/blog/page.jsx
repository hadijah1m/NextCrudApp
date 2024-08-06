import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Blog = () => {
  const imagedUrls=[
    "https://images.pexels.com/photos/15505729/pexels-photo-15505729/free-photo-of-men-holding-surfboards-walking-along-beach-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    "https://images.pexels.com/photos/20347119/pexels-photo-20347119/free-photo-of-woman-in-conical-hat-working-on-rural-field.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    "https://images.pexels.com/photos/26131247/pexels-photo-26131247/free-photo-of-hand-holding-a-white-blooming-flower.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    "https://images.pexels.com/photos/13599878/pexels-photo-13599878.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
  ]
  return (
    <div className='grid gap-5 overflow-auto'>
    {
      imagedUrls?.map((url,index) => (
        <Link href='#' className='grid grid-cols-1 md:grid-cols-3 gap-2 items-center ' key={index}>
        <div className='md:col-span-1 min-h-44 h-full relative' style={{position:"relative"}}>
        <Image src={url} alt='blog image' fill={true} style={{objectFit:"cover"}} className="object-cover" />
        </div>
          <div className='md:col-span-2' style={{}}>
            <h1>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rem velit expedita 
              aliquid totam possimus. Animi deleniti recusandae asperiores officia odio pariatur 
              tempore similique quisquam debitis illo, eaque officiis harum.</p>
          </div>
        </Link>
      ))
    }
    </div>
  )
}

export default Blog
