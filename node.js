const http=require('http');
const fs=require('fs');
const filecontent=fs.readFileSync('C:\\Users\\singh\\OneDrive\\Desktop\\javascript\\snake\\index.html');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/js'})
    res.end(filecontent);
})
server.listen(80,'127.0.0.1',()=>{
    console.log("server working");
})