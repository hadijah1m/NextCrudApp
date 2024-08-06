import {z} from "zod";

export const registerSchema = z.object({
  username: z.string().trim().min(2,"Enter a valid username with more than 2 characters"),
  email:z.string().email(),
  password: z.string().min(8,"Password must be more than 8 characters"),
  confirmpassword:z.string()
}).refine(data => data.password === data.confirmpassword,
  {
    message:"Passwords must match",
    path: ["confirmpassword"]
  }) 

  export const formSchema = z.object({
    title:z.string().trim().min(2,"Enter a title with 2 or more characters"),
    description:z.string().trim().min(1,"Enter a description with 1 or more characters"),
    author:z.string().trim().min(2,"Name should have more thean 2 charaters"),
    imageurl:z.string().url(),
    content:z.string().trim().min(2,"Enter a title with more than 2 characters"),
  })

  export const loginSchema = z.object({
    email:z.string().email(),
    password: z.string().min(2,"Password must be more than 2 characters")
  })