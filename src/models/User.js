import mongoose from "mongoose";

const { Schema,model } = mongoose;


const userSchema = new Schema({
  username:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  password: {
    type: String,
    required: true,
  }
},
{timestamp: true}
)
/*userSchema.pre("save",function(next){
  const user = this
  if (this.isModified("password") || this.isNew){
    bcrypt.genSalt (10,function(saltError,salt){
      if (saltError)
      return next(saltError)
      else{
        bcrypt.hash(password,salt,function(hasherr,hash){
          if(hasherr) return next(hasherr)
          user.password = hash
          next()
        })
      }
    })
  }else{
    return next()
  }
})*/
//hash does work for existing users or users to be updated
const user = mongoose.models.User || mongoose.model('User',userSchema) 
export default user;