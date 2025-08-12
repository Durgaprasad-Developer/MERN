const http = require('http');

const myServer = http.createServer((req,res)=>{
console.log(req.url);

switch(req.url) {
    case '/':
        res.end('<h1>Home page</h1>');
        break;
        case '/about':
            res.end('<h1>About page</h1>');
            break;
            case '/contact':
                res.end('Contact page');
                break;
}
})
myServer.listen(8001, ()=>{
    console.log('Server started')
})