const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
    // console.log('request has been made')
    // console.log(req)
    console.log(req.url, req.method);
    //set heaader content type
    res.setHeader('Content-Type', 'text/html');

//Returning html pages
let path = './views/';
switch(req.url){
    case '/':
        path += "index.html";
        res.statusCode = 200;
        break;
    case '/about':
        path += 'about.html'
        res.statusCode = 200;
        
        break;
    case '/about-me':
        res.setHeader('Location', '/about');
        res.statusCode = 301;
    break;
    default:
        path += '404.html';
        res.statusCode = 404;    
}

   // send an html file

   fs.readFile(path, (err, data) => {
       if (err) {
           console.log(err);
           res.end();
       }
       else{
           res.write(data);
           res.end();
       }
   })
});

// Listens to certain port on your localhost
server.listen(3000, 'localhost', () =>{
    console.log('listening for request');
})



