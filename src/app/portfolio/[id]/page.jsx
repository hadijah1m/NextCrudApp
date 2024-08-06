import Button from '@/components/Button'
import React from 'react'
import Image from 'next/image'

const PorfolioCategory = ({params}) => {
  const data = [
    {
      id: 1,
      title: "Creative Portfolio",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
      image:
        "https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg",
    },
    {
      title: "Minimal Single Product",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
      image:
        "https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg",
    },
    {
      id: 3,
      title: "Strong Together Charity",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
      image:
        "https://images.pexels.com/photos/2916450/pexels-photo-2916450.jpeg",
    }
  ];
  const category = params.id
  return (
    <div className='mb-auto'>
       <h1 className='font-medium text-8xl'>Our Works</h1>
      <p className='font-medium text-3xl mt-10'>{category}</p>
     <div className='grid gap-10'>
     {
        data.map(info => (
          <div className=' flex flex-col &>*:nth-child(odd)] md:flex-row gap-3 ' key={info.id}>
        <div className='flex-1 flex-col flex items-start justify-center gap-3'>
          <h2 className='text-3xl font-semibold'>{info.title}</h2>
          <p className='text-lg'>{info.desc}</p>
            <Button path="#" text="See More"/>
        </div>
        <div className='flex-1 relative min-h-96'>
          <Image src={info.image} alt="Image of guitarist playing on the road" fill className="object-cover"/>
        </div>
      </div>
        ))
      }
     </div>
    </div>
  )
}

export default PorfolioCategory