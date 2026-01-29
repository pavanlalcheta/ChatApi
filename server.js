const express = require('express');
const cors = require('cors');
const http = require('http');
require('dotenv').config();
const ConnectDB = require('./config/db');
const SocketIO = require('socket.io');
const initSocket = require('./socket/socket');

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger/swagger');

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(cors());

ConnectDB();

const io = SocketIO(server,{
    cors:{origin:"*"}
})

app.set('io',io);



initSocket(io);


app.get('/',(req,res)=>{

    res.send('API is Running');
});

app.use('/api',require('./routes/userRoutes'));
app.use('/api',require('./routes/messageRoutes'));

app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerSpec));

server.listen(process.env.PORT,()=>{

    console.log(`Server is Running on Port ${process.env.PORT}`)
})