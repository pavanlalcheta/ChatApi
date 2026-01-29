const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition:{
        openapi:'3.0.0',
        info: {
            title:'Chat API',
            version:'1.0.0',
            description:"REST + Socket.io Chat Backend API Documentation"
        },
        servers:[
            {
                url:'http://localhost:3000',
                description:"Local Server"
            },
             {
                url: "https://chatapi-6y1f.onrender.com",
                description: "Production (Render)"
        }
        ]
    },
    apis:["./routes/*.js"]
}

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;