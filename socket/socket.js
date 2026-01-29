module.exports = (io) => {
  
    io.on('connection',(socket) =>{
        console.log('User Connected',socket.id);

        socket.on('send_message',(msg)=>{
            io.emit('receive_message',msg)
        });

        socket.on('disconnect',()=>{
            console.log('User Disconnected..!',socket.id);
        })
    });

}