const fs = require('fs');
const { Module } = require('module');

// const method = req.method;
// console.log(method);

const requestHandler = (req, res) =>{
    const url = req.url;
    const method = req.method;
if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head>');
        res.write('<title>My Nodes Server</title>');
        res.write('</head>');
        res.write('<body>');
        res.write('<form action = "/message" method = "POST">');
        res.write('<input name = "message" type = "text">');
        res.write('<button type = "submit">Send</button>');
        res.write('</input>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
}
        
if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk)=>{
        console.log(chunk);
        body.push(chunk);
    });
    req.on('end', ()=>{
        const parsedBody = Buffer.concat(body).toString();
        console.log(parsedBody);
        const message = parsedBody.split('=')[1];
        fs.writeFileSync('message.txt', message);
    });
    res.statusCode = 302;
}

else{
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head>');
        res.write('<title>My Nodes Server</title>');
        res.write('</head>');
        res.write('<body>');
        res.write('<h1>Hello from Nodejs server</h1>');
        res.write('</body>');
        res.write('</html>');
        res.end();
}  
};

// module.exports.handler = requestHandler;
// module.exports.someText = 'Some hard coded coding...';
// OR 
exports.handler = requestHandler;
exports.someText = 'Some hard coded coding...';