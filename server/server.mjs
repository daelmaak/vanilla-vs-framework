import http from "http";

import { products } from "./data/products.mjs";

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url.startsWith("/products") && req.method == "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Cache-control", "public, max-age=604800");
    res.setHeader("Access-Control-Allow-Origin", "*");

    const url = new URL(req.url, `http://${req.headers.host}`);
    const page = url.searchParams.get("page") || 1;
    const size = url.searchParams.get("size") || 20;
    const pagedProducts = products.slice(page * size - size, page * size);
    return res.end(JSON.stringify(pagedProducts));
  }
  res.statusCode = 404;
  res.end("404: Not Found");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
