const http = require("http");

const options = {
    hostname : "jsonplaceholder.typicode.com",
    path : "/todos/1",
    method : "GET",
    headers : {
        "Content-Type" : "application/json"
    }
};

const req = http.request(options , res => {
    console.log(`Status Code : ${res.statusCode}`);

    res.on('data', d => {
        process.stdout.write(d);
    });
});

req.on('error', error => {
    console.error(error);
});

req.end();