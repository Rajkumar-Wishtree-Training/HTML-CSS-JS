var http = require('http');
http.createServer((req, res)=>{
    res.write("Namaste Node");
    res.end();

}).listen(8080,()=>{
    console.log("server Started")
})