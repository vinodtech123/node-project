
var http = require('http');

const server = http.createServer((req,res)=>{
    const pathName = req.url;

    if(pathName == '/'||pathName == '/overview')
    {
           res.end('this is an overview page');
    }
    else if(pathName == "/product")
    {
        res.end('this is an product page');
    }
    else
    {
        res.writeHead(404,{
           'Content-type':'text/html',
           'my-own-header':'hello world'
        });
        res.end('<h1>Page not found</h1>');
    }

});

server.listen(8000,'127.0.0.1',()=>{

    console.log('request is run on port 8000')

});