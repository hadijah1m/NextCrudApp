"use client"
import Button from '@/components/Button'
import {React,useState}from 'react'
import { loginSchema } from '@/utils/zodSchemas'
import {useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { useSession,signIn} from 'next-auth/react';
import { redirect } from 'next/navigation';
import toast from 'react-hot-toast';
import Link from 'next/link';
import { AuthError } from 'next-auth';

 

const Login = () => {
    const session = useSession()
    const [clicked,setClicked] = useState(false)

    const {
      register,
      handleSubmit,
      formState:{errors,isSubmitting},
      reset
    }= useForm({
      resolver: zodResolver(loginSchema)
    })
    const onSubmit = async(data) => {
    // await new Promise(resolve => setTimeout(resolve,1000))
      try
       {
          const res =  await signIn("credentials",{
              email:data.email,
              password:data.password,
              redirect:false,
              callbackUrl: "/dashboard" 
            })
         console.log(res)
          if(res.error){
            toast.error("Invalid username or password or both")
            return;
            }
            
          redirect('/dashboard')
      } catch (error) {
     /* if (error instanceof AuthError) {
          switch (error.type) {
            case 'CredentialsSignin':
              toast.error('Invalid credentials.')
              return ;
            default:
              toast.error('Something went wrong.')
              return ;
          }
          
      }*/
      //toast.error('Something went wrong.')
     // console.log("Login Error")
   //console.log(error)
    }

    }
    const googleSignIn = async() => {
     
    try{
      setClicked(true)
       await  signIn('google')
      toast.success("login successful")
      redirect('/dashboard')

     }

    catch(error){
    //toast.error("Google Login failed")
    }
    setClicked(false)
    }
    if(session.status=='authenticated'){
    return  redirect('/dashboard')
    }
    return (
      <div className='grid  place-items-center mx-auto w-full gap-3'>
      <form className='flex flex-col gap-3 md:w-1/3 mx-auto' onSubmit={handleSubmit(onSubmit)}>
        <input type="email" {...register("email")} placeholder='email' className='p-4 border-2 rounded-md outline-0' />
        {errors.email && (<p className='text-red-400'>{errors.email.message}</p>)}
        <input type="password"  {...register("password")} placeholder='password' className='p-4 border-2 rounded-md outline-0' />
        {errors.password && (<p className='text-red-400'>{errors.password.message}</p>)}
        <button  className='bg-green-600 hover:bg-blue-500 disabled:opacity-20 py-2 text-white rounded-md' disabled={isSubmitting}> {isSubmitting ? "Loading":"LOGIN"}</button>
      </form>
      <button className='bg-green-600 hover:bg-blue-500 py-2 px-3 text-white disabled:opacity-15 rounded-md max-w-fit' disabled={clicked} onClick={googleSignIn}>LOGIN WITH GOOGLE</button>
      <Link href="/dashboard/register" className='bg-green-600 hover:bg-blue-500 py-2 px-3 text-white rounded-md max-w-fit'>Register</Link>
      </div>
    )
}

export default Login;