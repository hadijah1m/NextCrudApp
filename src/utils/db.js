import mongoose from "mongoose";


const Connect = async() => {
  try{
    await mongoose.connect(process.env.MONGOURLT) 

  }catch(error){
    console.log(error)
    throw new Error("Databasse Connect failed"+error)
  }
}
export  default Connect;