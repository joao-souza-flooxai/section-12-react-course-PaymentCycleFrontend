//imports
const bodyParser = require('body-parser');
const express = require('express');
const cors = require("./cors")
const server = express();
const queryParser = require('express-query-int');

//middlewares
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(cors);
server.use(queryParser);
//port config
const port = 3006;
server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`);
});

module.exports = server;