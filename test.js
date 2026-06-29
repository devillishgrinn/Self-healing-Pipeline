// test.js
const express = require("express");
const http = require("http");

const app = express();
const PORT = 5000;

app.get("/", (req, res) => res.sendStatus(200));

const server = app.listen(PORT, () => {
    http.get(`http://localhost:${PORT}`, (res) => {
        server.close(() => process.exit(res.statusCode === 200 ? 0 : 1));
    }).on("error", () => {
        server.close(() => process.exit(1));
    });
});