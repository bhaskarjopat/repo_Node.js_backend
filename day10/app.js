// const http = require('http');
// const express = require('express');
// const app = express();

// app.use((req, res, next)=>{
//     console.log("Express the middleware 1");
//     next();    //Allows the request to continue to the next middleware in line
// })

// app.use((req, res, next)=>{
//     console.log("Express the middleware 2");
//     res.send('<h1>Hello from Express.js !!</h1>');
// })

// const server = http.createServer(app);
// server.listen(2027);

// console.log('Server listening on port: 2027');









const express = require('express');
const app = express();

app.use((req, res, next)=>{
    console.log("Express the middleware 1");
    next();    //Allows the request to continue to the next middleware in line
})

app.use((req, res, next)=>{
    console.log("Express the middleware 2");
    res.send('<h1>Hello from Express.js !!</h1>');
})

app.listen(2027);

console.log('Server listening on port: 2027');