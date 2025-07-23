const http =  require('http');

const server =http.createServer((req,res)=>{
    if(req.url == '/'){
        res.end('this is the home page');
    }
    else if(req.url == '/about'){
        res.end('this is about page');
    }
    else{
        res.end(`<h1>this is wrong page</h1>`);
    }

    
})


server.listen(5000);