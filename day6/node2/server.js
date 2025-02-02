var http = require('http');

var evaluate = require('./evaluate');
var custom = require('./custom');
var module3 = require('./module3');

function onrequest(request,response){
    response.writeHead(264, {'content-type':'text/plain'});
    response.write('Welcome to Node.js');
    response.write('\n' + evaluate.sum(9,9));
    response.write('\n' + evaluate.str);
    response.write('\n'+evaluate.multiply(2,5));
    response.write('\n' + custom.dt());
    response.write('\n' + custom.myStr1);
    response.write('\n' + custom.myStr2);
    response.write('\n' + module3.myFunction());
    response.end();
}
http.createServer(onrequest).listen(2005);

console.log('Server listen at 2005');