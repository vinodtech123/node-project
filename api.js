// Api is an service in which we requesting for getting data
// data which user want to get from api

const fs = require('fs');
const http = require('http');

const data = fs.readFileSync('./product_api/product.json','utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req,res)=>{

    const pathname =  req.url;

    if(pathname == "/get-products")
    {

        res.writeHead(200,{
           'Conten-type':'application/json'
        });

        res.end(data);

    }
    else
    {
        
        res.writeHead(404,{
            'Conten-type':'text/html'
         });

         res.end('<h1>Page note found</h1>');
    }

});

server.listen(8000,'127.0.0.1',()=>{
    console.log('server is running on port 8000');
})