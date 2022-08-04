// this module give the facility to build network to the server
const http = require('http');

// for building server in node js we have to do 2 things
// first is we have to create the server & second we have to run the server

// this call back function hold 2 variable 1) request 2) response
const server = http.createServer((req,res)=>{
    // we are sending response to client
    res.end('hello from the server');
}); // this method hold call back function which will be fired on each time if we getting new request on sever

server.listen(8000,'127.0.0.1',()=>{
    console.log('listening to request on port 8000');
}); // port means basically it is the address of host


