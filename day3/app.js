const http = require('http');

// function rqListener(req, res) {
//     console.log(req);
// }

const server = http.createServer((req, res)=>{
    // console.log(req.url, req.method, req.headers);
    // process.exit();
    const url = req.url;
    if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head>');
    res.write('<title>My Nodes Server</title>');
    res.write('</head>');
    res.write('<body>');
    res.write('<h1>Hello from Home page</h1>');
    res.write('</body>');
    res.write('</html>');
    res.end();
}
else if (url === '/about') {
    res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head>');
        res.write('<title>My Nodes Server</title>');
        res.write('</head>');
        res.write('<body>');
        res.write('<h1>Hello from About Page</h1>');
        res.write('</body>');
        res.write('</html>');
        res.end();
}
else if (url === '/message') {
    res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head>');
        res.write('<title>My Nodes Server</title>');
        res.write('</head>');
        res.write('<body>');
        res.write('<form action = "/" method = "POST">');
        res.write('<input type = "text">');
        res.write('<button type = "Submit">Send</button>');
        res.write('</input>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        res.end();
}
else{
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head>');
        res.write('<title>My Nodes Server</title>');
        res.write('</head>');
        res.write('<body>');
        res.write('<h1>Go To Home Page</h1>');
        res.write('</body>');
        res.write('</html>');
        res.end();   
}
});

server.listen(3000)