let http = require("http");

let server = http.createServer((req, res) => {
    console.log("Hello I am server");
    res.end("Hello from server");
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});