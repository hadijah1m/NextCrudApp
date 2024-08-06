import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from 'bcrypt'
import {z} from 'zod'

export const authOptions = {
  // Configure one or more authentication providers
  session:{
    strategy: 'jwt'
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
    CredentialsProvider({
      name: 'Credentials',
      
    /* credentials: {
        email: { label: "email", type: "email", placeholder: "email" },
      password: { label: "password", type: "password",placeholder: "password"  }
     },*/
      async authorize(credentials,req){
       // if(credentials == null) return null;
        const parsedCredentials = z
      .object({ email: z.string().email(), password: z.string().min(2) })
      .safeParse(credentials);
      if (parsedCredentials.success)
       {
        console.log('validation pass');
        console.log(credentials);
       // const { email, password } = parsedCredentials.data;
        const res = await fetch('http://localhost:3000/api/auth/login', {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: {"Content-Type":"application/json"}
        });
        const user = await res.json()
        console.log(res.status)
        console.log(user)
        if(user == null)  throw new Error("User not found")//return null
        if(res.status == 201){
         const isMatch = await bcrypt.compare(credentials.password,user.password)
         /*   function(err,result)
          {
            if(err){
              console.log("pass mismatch")
              return null //throw new Error("wrong password") 
            } 
           else{
           
            return result}
          }
          )*/
          if(isMatch) return user;
          else throw new Error("Password does not match")
        } 

        else
        {
          throw new Error("Status not ok") // return null
        }
      }
      console.log("invalid credentials")
      return null
      }
    })
  ],
  pages:{
    signIn:'/dashboard/login'
},
 /* callback:{
    authorize({auth,request:{nextUrl}}){
      const isLoggedIn = !!auth.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard')
      if(isOnDashboard){
        if(isLoggedIn) return true;
        return false;
      }else if(isLoggedIn){
        return Response.redirect(new URL('/dashboard'))
      }
      return true
    }
  }*/
}

const handler =  NextAuth(authOptions)
export { handler as GET, handler as POST }
 
export const { auth, signIn, signOut } = NextAuth(authOptions)