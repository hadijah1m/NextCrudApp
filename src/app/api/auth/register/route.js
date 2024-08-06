import user from "@/models/User"
import Connect from "@/utils/db"
import { Underdog } from "next/font/google"
import { NextResponse } from "next/server"
import bcrypt from 'bcrypt'
import { registerSchema } from "@/utils/zodSchemas"

export async function POST (req) {
const body =  await req.json()
//console.log(body)
const result = registerSchema.safeParse(body)
let zodErrors = {}
if(!result.success){
  result.error.issues.forEach(issue => {
   zodErrors = {...zodErrors,[issue.path[0]]:issue.message}
  })
  return NextResponse.json(
    Object.keys(zodErrors).length > 0 ? {errors: zodErrors}:{success:true},
    {status: 500}
  )
}
const password = body.password
const hashedpassword = await bcrypt.hash(password,10)
/*,function(hasherr,hash){
  if(hasherr){ throw new Error("not hashed")
  return hash
}*/
//console.log(hashedpassword)

let actualbody = {...body,password:hashedpassword}

actualbody = Object.keys(actualbody).filter(key => key!=="confirmpassword").reduce((newObj,key) => {
newObj[key] = actualbody[key]
return newObj
},{})
const newUser = new user({...actualbody})
try{
  await Connect()
  console.log('connected')
  await newUser.save()
  console.log("user added")
  return new NextResponse("OK",{status:201})
}catch(error){
  return NextResponse.json({error:error},{status:500})
}
}