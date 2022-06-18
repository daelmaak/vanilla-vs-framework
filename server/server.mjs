import http from "http";

import { products } from "./data/products.mjs";

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/products" && req.method == "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
    return res.end(JSON.stringify(products));
  }
  res.statusCode = 404;
  res.end("404: Not Found");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
