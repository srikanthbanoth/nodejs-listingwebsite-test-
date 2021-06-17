var http=require('http');
var fs=require('fs');
var url=require('url');
http.createServer((req,res)=>{
   if(req.url=='/'){
    //    callback('index.html')
        filename='index.html'
       fs.readFile(filename, (err, data) => {
           if (err) {
               res.writeHead(404, { 'Content-Type': 'text/html' });
               res.write('404 Bad Request');
           }
           res.writeHead(200, { 'Content-Type': 'text/html' });
           res.write(data)
           res.end()
       })
   }
   if(req.url=='/contact.html'){
       filename = 'contact.html'
       fs.readFile(filename, (err, data) => {
           if (err) {
               res.writeHead(404, { 'Content-Type': 'text/html' });
               res.write('404 Bad Request');
           }
           res.writeHead(200, { 'Content-Type': 'text/html' });
           res.write(data)
           res.end()
       })
   }
    if (req.url == '/about.html') {
        filename = 'about.html'
        fs.readFile(filename, (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.write('404 Bad Request');
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data)
            res.end()
        })
    }
}).listen(8080)