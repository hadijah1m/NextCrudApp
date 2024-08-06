import user from "@/models/User"
import Connect from "@/utils/db"
import { NextResponse } from "next/server"


export async function POST(req){
  const body =await req.json()
  //console.log(body)
  //console.log(body.email)
  try{
    await Connect()
    const userdoc = await user.findOne({email:body.email})
    return NextResponse.json(userdoc,{status:201})
  }catch(error){
    return NextResponse({error:error},{status:500})
  }
 
//const res = await user.fi
}