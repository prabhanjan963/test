import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const Connection = async () => {
    try{
        mongoose.connect(process.env.MONGO)
        console.log('datbase connetion successfully')
    }catch(error){
        console.log('error while database connection')
    }
} 

export default Connection;