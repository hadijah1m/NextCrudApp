"use client"
import React from 'react'
import Image from 'next/image';
import toast from 'react-hot-toast'
import {zodResolver} from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { formSchema } from '@/utils/zodSchemas';
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import useSWR from 'swr'
import axios from 'axios'

const Dashboard = () => {
  const session = useSession()
  console.log(session)
  if(session.status == 'unauthenticated' || session.status == 'loading'){
    //redirect('/api/auth/signin?callbackUrl=/client')
return   redirect('/dashboard/login')
  }
const {
  register,
  handleSubmit,
  setError,
  formState:{
    errors,isSubmitting
  },

} = useForm({
  defaultValues: {
    author: session.data.user.email
  },
  resolver:zodResolver(formSchema)
})


const onSubmit = async(data) => {
  try{
  const res=   await fetch('/api/post',
   {
     method: 'POST',
   headers: {
     'Content-Type': 'application/json',
   },
   body: JSON.stringify(
    //data
    {
      title: data.title,
      description: data.description,
      author: session.data.user.email,
     // email:session.data.user.email,
      imageurl: data.imageurl,
      content: data.content
    }
   )
   }
   )
 const responseData = await res.json()
 /*if(!res.ok)
    { 
    }*/
 if(responseData.errors){
  const errors = responseData.errors;
  if(errors.title){
    setError("title",{
      type:"server",
      message: errors.title
    })
  }
  else if(errors.description){
    setError("description",{
      type: "server",
      message: errors.description
    })
  }
  else if(errors.author){
    setError("author",{
      type: "server",
      message: errors.author
    })
  }
  else if(errors.imageurl){
    setError("imageurl",{
      type: "server",
      message: errors.imageurl
    })
  }
  else if(errors.content){
    setError("content",{
      type: "server",
      message: errors.content
    })
  }else{
    toast.error("Something went wrong.could not send data")
  }
 }
  if(res.status == 201){
    toast.success("Post successfully sent ")
    return;
   }
   else{
    toast.error("Post failed to be sent")
    return;
   }
    
    }catch(e){
    //toast.error("Post failed to api")
    }
}
const fetcher = url => axios.get(url).then(res => res.data)
const { data, error, isLoading } = useSWR(`/api/post?username=${session.data.user.email}`, fetcher) 


   //if (error) return <div>failed to load</div>
  // if (isLoading) return <div>loading...</div>
  // return (data? <div>hello {data.author}!</div>: <div>No post Yet.Add a new Post</div>)

  return (
    <div className='grid grid-cols-2 gap-4' >
      <div>
        {error && <div>failed to load</div>}
        {isLoading && <div>loading...</div>}
          {data && ((item,key) =>(
          <div key={key}>
            <div className="flex space-between">
                <div className='relative w-20 h-20 rounded-lg'>
                    <Image src={data.imageurl} fill  className='fit' alt="Image here"/>
                  </div>
                <h2>{data.title}</h2>
            </div>
            <p>{data.content}</p>
              <div className='flex justify-end justify-items-stretch'>
                <button className='text-black'><CiEdit /></button>
                <button className='text-black'><MdDeleteOutline /></button>
              </div>
          </div>
          ))}
      </div>
      <div>
      <h1 className='text-3xl'>Add New Post</h1>
          <form className="flex flex-col text-black" onSubmit={handleSubmit(onSubmit)}>
          <input type="text" {...register("title")} placeholder="Title" className="border-4 px-3 py-3"/>
            {errors.title && (<p className="text-red-200">{errors.title.message}</p>)}
              <input type="text"  {...register("description")} placeholder='Description' className="border-4 px-3 py-3 " />
              {errors.description && (<p className="text-red-500">{errors.description.message}</p>)}
              <input type="text"  {...register("author")} placeholder='Author' className="border-4 px-3 py-3 " />
              {errors.author && (<p className="text-red-500">{errors.author.message}</p>)}
              <input type="text" {...register("imageurl")} placeholder='Image' className='border-4 px-3 py-3'/>
              {errors.imageurl && (<p className="text-red-500">{errors.imageurl.message}</p>)}
              <textarea rows={10} cols={30} {...register("content")} placeholder="Content" className='border-4 p-3 w-full'></textarea>
              {errors.content && (<p className='text-red-500'>{errors.content.message}</p>)}
              <button disable={isSubmitting} className='bg-green-300 hover:bg-green-500 disable:bg-green-200 py-2 text-white rounded-md disabled:opacity-20'>{isSubmitting? "Posting ..." :"Submit"}</button>
          </form>  
      </div>
     </div> 
  )
}

export default Dashboard