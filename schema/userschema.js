import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:[true,'invalid e-mail']
    },
    subject:{
        type:String,
    },
    phone:{
        type:Number,
        required:true
    },
    description:{
        type:String
    }
})

const user = new mongoose.model('testuser',userSchema);

export default user;