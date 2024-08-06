
import  Connect  from "@/utils/db"
import Post from '@/models/Post'
import { NextResponse } from "next/server"
import { formSchema, registerSchema } from "@/utils/zodSchemas"


export async function POST (req) {
  
 /* try{
    await Connect();
    const post = new Post(body)
    await post.save();
    return NextResponse(201,"")
  }catch(e){

  }*/
  const body = await req.json()
  const result = formSchema.safeParse(body)
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

  const post = new Post(body)
 try{
  console.log("Hi")
  await Connect()
  console.log("COnnnect")
 // await Post.create(body)
   await post.save()
  console.log('save')
  //await Post.save(JSON.parse(body))
  //await Post.create(JSON.parse(body))
  return new NextResponse("OK",{status:201})
  //await post.save();
// console.log(typeof(body))
  //return NextResponse.json({body},{status:201})*/
 }catch(error){
  console.log(error)
  return NextResponse.json({error:error},{status:501})
 }
}

/*export async function GET () {
 // const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  //const data = await res.json()
  //return Response.json(data)
 // return Response.json({hello:"Ok12"},)
 //return new Response("hi orld",{status:200,headers:{referer:referer}})
 try{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/')
  const data = await res.json()
  return NextResponse.json(data,{status:201})
 }catch(error){
  console.log(error)
  return NextResponse.json({error:error},{status:501})
 }
}*/

