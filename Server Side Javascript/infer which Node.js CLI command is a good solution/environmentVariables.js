const PORT = process.env.PORT;
const ENV = process.env.NODE_ENV;

const http = require("http");

http.createServer((req, res) => {
    res.end("Success!");
});

http.listen(PORT, () => {
    console.log(`The Environment is ${ENV} and the Port is ${PORT}`);
});