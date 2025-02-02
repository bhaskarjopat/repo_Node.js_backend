const { log } = require('console');
const http = require('http');
const fs = require('fs');

// function rqListener(req, res) {
//     console.log(req);
// }

const server = http.createServer((req, res)=>{
    // console.log(req.url, req.method, req.headers);
    // process.exit();
    const url = req.url;
    const method = req.method;
    console.log(method);
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
    // res.write('Hello from message');


    // res.setHeader('Content-Type', 'text/html');
    //     res.write('<html>');
    //     res.write('<head>');
    //     res.write('<title>My Nodes Server</title>');
    //     res.write('</head>');
    //     res.write('<body>');
    //     res.write('<h1>Hello from Message Page</h1>');
    //     res.write('</body>');
    //     res.write('</html>');
    //     res.end();


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
});

server.listen(3030)