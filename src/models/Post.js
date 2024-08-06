import mongoose from 'mongoose'
const {Schema,model} = mongoose

export const blogSchema = new Schema({
  title:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  author:{
    type:String,required:true
  },
  imageurl:{
    type: String, required: true
  },
  content:{
    type:String,required:true
  }
  
},
{ timestamps: true })
const Post =  mongoose.models.Post || mongoose.model("Post",blogSchema)
export default Post;