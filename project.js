// core built in module
const fs = require('fs');
const http = require('http');
const url = require('url');

// usally we will import all our own  module after the core module at the top of file
const replaceTemplate = require('./modules/replaceTemplate');

const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`,'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`,'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`,'utf-8');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req,res)=>{

       const {query,pathname} = url.parse(req.url,true);

    if(pathname == "/" || pathname=="/overview")
    {
         res.writeHead(200,{'Content-type':'text/html'});

        const cardsHtml =  dataObj.map(el => replaceTemplate(tempCard,el)).join('');// map mehod accept call back function & thats call back function get an argument
        // it accept current element of loop
        // replaceTemplate function hold tempCard html
        // join() methods convert cardshtml array into string

        const output = tempOverview.replace('{%PRODUCT_CARDS%}',cardsHtml)
        res.end(output);
    }
    else if(pathname == "/product")
    {
           res.writeHead(200,{'Content-type':"text/html"});
           const product = dataObj[query.id];
           const output = replaceTemplate(tempProduct,product);
           res.end(output);
    }
    else
    {
        res.writeHead(404,{'Content-type':'text/html'});
        res.end('<h1>Page not Found</h1>');
    }

});

server.listen(8000,'127.0.0.1',()=>{
    console.log('server is running on port 8000');
})


