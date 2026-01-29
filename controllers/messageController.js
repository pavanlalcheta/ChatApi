const Message = require('../models/Message');
const User = require('../models/User');

exports.sendMessages = async (req,res) => {

    try{
        const { sender,receiver,text} = req.body;
        const senderExists = await User.findOne({username:sender});
        if(!senderExists)
        {
            return res.status(400).json({
                message:"Sender dose not Exists..!"
            })
        }

        const receiverExists = await User.findOne({username:receiver});
        if(!receiverExists)
        {
            return res.status(400).json({
                message:"Receiver does not Exists..!"
            })
        }
        const message = await Message.create(req.body);
        const io = req.app.get('io');
        if(!io)
        {
            return res.status(500).json({
                error:"Socket not initialized"
            })
        }
        io.emit('receive_message',message)
        res.status(201).json({
            message:'Message send Successfully...!',
            msg:message
        })
    }
    catch(err)
    {
        res.status(500).json({
            message:'Something went wrong while sending message',
            Error: err.toString()
        })
    }
};

exports.getMessages = async (req,res) => {

    try{
        const { sender,receiver } = req.query;

        const messages = await Message.find({$or:[
            {sender,receiver},
            {sender:receiver,receiver:sender}
        ]})
        .sort({createdAt:-1});

        res.status(200).json({
            message: "Messages fetched Successfully...!",
            messages
        });
    }
    catch(err)
    {
        res.status(500).json({
            message:"Failed to fetch messages",
            Error:err.toString()  
        })
    }
}