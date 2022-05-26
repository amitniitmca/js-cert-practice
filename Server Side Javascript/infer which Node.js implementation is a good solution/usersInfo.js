const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/users' && req.method === 'GET') {
        const data = getUsers();
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(data);
    }
    else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end("Welcome!");
    }
});

function getUsers() {
    return 'Amit Kumar, Sparsh Singh';
}

server.listen(port, () => {
    console.log(`Server is running at ${port}`);
});