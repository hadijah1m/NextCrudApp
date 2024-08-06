import Post from "@/models/Post.js"
import user from "@/models/User"
import Connect from "@/utils/db"
import { NextResponse } from "next/server"

export async function GET( {params}){
  const useremail = params.id
  console.log(useremail)
try{

await Connect()
console.log("connected")
const rdoc = await Post.find({author:useremail})
return NextResponse.json(rdoc,{status:201})
}catch(error){
  return NextResponse.json({error:error},{status:500})
}

}