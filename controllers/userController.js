const User = require('../models/User');

exports.createUser = async (req,res) => {
    try{
        const user = await User.create(req.body);
        res.status(201).json({
            message:'User Created Successfully..!',
            user:user
        });
    }
    catch(err)
    {
        res.status(500).json({
            message:"Something went wrong while creating User..!"
        })
    }
};


exports.getUsers = async (req,res) => {

    try{
        const users = await User.find();
        res.status(200).json({
            message:"Users fetched Successfully..!",
            users:users
        })
    }
    catch(err)
    {
        res.status(500).json({
            message:"Failed to fetch users",
            Error:err.toString()
        })
    }
}