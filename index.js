var http=require('http');
var fs=require('fs');
var url=require('url');
const { callbackify } = require('util');
http.createServer((req,res)=>{
   if(req.url=='/'){
       callback('index.html');
   }
    if (req.url == '/contact.html') {
        callback('contact.html');
    }
    if (req.url == '/about.html') {
        callback('about.html');
    }

   function callback(filename){
       fs.readFile(filename, (error, datafile) => {
           if (error) throw error;
           res.writeHead(200, { 'Content-Type': 'text/html' });
           res.write(datafile);
           return res.end();
       })
   }
}).listen(8080)