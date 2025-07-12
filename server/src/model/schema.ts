import mongoose, { model } from "mongoose";

interface User {
    name : string;
    username :string;
    email:string;
    password:string;
    isVerified : boolean
}


 const UserSchema = new mongoose.Schema<User>({
            name:{
                type:String,
                required : true,
            },
            username:{
                type:String,
                required : true,
                unique:true,
                
            },
            email:{
                type:String,
                required : true,
            },
                password:{
                type:String,
                required : true
            },
            isVerified:{
                    type:Boolean,
                    default:false
            }
})

export const UserModel = model<User>("User", UserSchema);
