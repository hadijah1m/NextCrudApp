"use client"
import Link from 'next/link'
import React from 'react'
import { useForm } from "react-hook-form";
import { registerSchema } from '@/utils/zodSchemas';
import {zodResolver} from "@hookform/resolvers/zod";
import toast from 'react-hot-toast';
import { useSession } from 'next-auth/react';
import {redirect} from 'next/navigation'


const Register = () => {
 
  const session = useSession()
  const {
    register,
    handleSubmit,
    formState:{errors,isSubmitting},
    reset,
    setError
  } = useForm(
    { 
     defaultValues:{
        email:"test@email.com",
    
      },
      resolver: zodResolver(registerSchema),
  
    }
  );

  const onSubmit = async(data) => { 
  
   // console.log(data)
   try
   {
        const res =   await fetch('/api/auth/register',
        {
          method: "POST",

        headers: { 
            "Content-type": "application/json; charset=UTF-8"
        } ,
        body: JSON.stringify(data)
        }
        )
      
        const resData = await res.json()
        if(resData.errors){
          const errors = responseData.errors;
          if(errors.username){
            setError("username",{
              type: "server",
              message: errors.username
            })
          }
          else if(errors.email)
          {
            setError("email",{
              type: "server",
              message: errors.email
            })
          }
          else if(errors.password)
          {
            setError("password",{
              type: "server",
              message: errors.password
            })
          }
          else if(errors.confirmpassword)
          {
            setError("confirmpassword",{
              type: "server",
              message: errors.confirmpassword
            })
          }else{
            toast.error("Something went wrong.could not register")
          }
        }
 
        if(res.status == 201 ){
          toast.success("User registered")
          redirect('/dashboard')
          return;
         }
        else{
          toast.error("User registration failed")
          return;
        }
  
   }catch(e){
   // toast.error("Registering failed")

   }
  }
  if(session.status =="authenticated"){
    return redirect('/dashboard')
  }

  return (
    <form className='flex flex-col gap-3 md:w-1/4 mx-auto text-gray-900' onSubmit={handleSubmit(onSubmit)}>
    <input type="text" {...register("username")} 
    placeholder="username" className="border-2 rounded-md px-3 py-3"
    />
    {errors.username && (<p className='text-red-400'>{errors.username.message}</p>)}
        <input {...register("email")}
          type="email" placeholder='email' className="border-2 rounded-md px-3 py-3 " 
          />
        {errors.email && (<p className='text-red-400'>{errors.email.message}</p>)}
        <input {...register("password")} 
        type="password" placeholder='password' className='border-2 rounded-md px-3 py-3'
        />
        {errors.password && (<p className='text-red-400'>{errors.password.message}</p>)}
            <input {...register("confirmpassword")}
          type="password" placeholder='confirm password' className='border-2 rounded-md px-3 py-3'
          />
                {errors.confirmpassword && (<p className='text-red-400'>{errors.confirmpassword?.message}</p>)}
            
        <button disable={isSubmitting} className='bg-green-700 hover:bg-green-500 disable:opacity-15 py-2 text-white rounded-md disabled:opacity-20'>{isSubmitting ? "Loading" : "Register"}</button>
        <Link href="/dashboard/login" className=' bg-green-700 hover:bg-green-500 disable:bg-green-200 py-2 text-white rounded-md disabled:opacity-20 text-center'>Login with existing account</Link>
       
    </form>
  )
}

export default Register