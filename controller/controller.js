import User from "../schema/userschema.js";

export const sendUser = async (req,res) => {
    const user = req.body;
    const newUser = new User(user)
    try{
        await newUser.save()
        res.status(201).json(newUser)
    }catch(error){
        res.status(404).json({message: error.message})
    }
}

