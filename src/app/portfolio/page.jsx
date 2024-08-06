import React from 'react'
import Link from 'next/link'

const Portfolio = () => {
  return (
    <div className='w-full h-screen overflow-auto mb-auto mb:4 md:mb-0 z-0'>
      <h1 className='font-medium text-8xl'>Our Works</h1>
      <p className='font-medium text-3xl mt-10'>Choose a gallery.</p>
      <div className='md:h-[25rem] flex md:flex-row flex-col gap-7 md:gap-2 w-full mt-6 '>
        <Link href="/portfolio/illustrations" className="group relative h-[24rem] md:w-1/3 xl:w-1/4 bg-illustration bg-cover border-[6px] border-[#bbb] rounded-md">
          <p className='group-hover:text-green-500 transition duration-200 ease-in-out delay-50 text-4xl absolute right-2 bottom-1'>Illustrations</p>
        </Link >
        <Link href="/portfolio/websites"  className="group relative h-[24rem] md:w-1/3 xl:w-1/4 bg-website bg-cover border-[6px] border-[#bbb] rounded-md">
          <p className='group-hover:text-green-500 transition duration-200 ease-in-out delay-50 text-4xl absolute right-2 bottom-1'>Websites</p>
        </Link>
        <Link href="/portfolio/application"  className="group relative h-[24rem] md:w-1/3 xl:w-1/4 bg-applications bg-no-repeat bg-cover border-[6px] border-[#bbb] rounded-md">
          <p className='group-hover:text-green-500 transition duration-200 ease-in-out delay-50 text-4xl absolute right-2 bottom-1'>Application</p>
        </Link>
      </div>
    </div>
  )

}

export default Portfolio