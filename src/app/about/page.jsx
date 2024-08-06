import Button from '@/components/Button'
import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className='overflow-auto'>
      <div className='w-full min-h-60 relative '>
        <Image src="https://images.pexels.com/photos/25751435/pexels-photo-25751435/free-photo-of-cake-shop.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="Image here" fill className='object-cover grayscale'/>
        <div className='absolute left-2 bottom-2 max-w-content bg-green-300 p-1 md:p-2 '>
          <h2 className='text-lg md:text-xl'>Digital Storytellers</h2>
          <p className='text-md md:text-lg'>Handcrafting award winning digital experiences</p>
        </div>
      </div>
      <div className='flex  flex-col md:flex-row md:gap-7 mt-10'>
        <div className='text-justify '>
          <h2 className='text-2xl'>Who Are We?</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
          <br/>
          <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
          architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
           sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
           voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
             dolore magnam aliquam quaerat voluptatem.
          </p>
          <br/>
          <p>
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
           Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
            cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una
             galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
          </p>
        <p></p>
        </div>
        <div>
          <h2 className='text-2xl'>What We Do?</h2>
          <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
             Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
              cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una
               galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</p>
               <br/>
               -Creative Illustrations
               <br/>
               --Dynamic Websites
               <br/>
               -Fast and Handy Mobile Apps
               <br/>
               <br/>
               <Button path="/contact" text="Contact"/>
        </div>
      </div>
    </div>
  )
}

export default About