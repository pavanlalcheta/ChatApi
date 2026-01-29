const mongoose = require('mongoose');

const ConnectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to Mongodb...!');
    }
    catch(err)
    {
        console.log('Error While Connecting to Mongodb:',err);
        process.exit(1);
    }
};

module.exports = ConnectDB;