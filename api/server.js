const express = require('express');
const cors = require('cors');
const server = express();

server.use(require("body-parser").text());
server.use(cors());
server.use(express.json());

const userRouter = require('./routers/users/users-router.js');
const eventsRouter = require('./routers/events/events-router.js');

server.use("/api/users", userRouter);
server.use("/api/events", eventsRouter);

server.get('/', (req, res) => {
    res.status(200).json({ msg: 'Server Up!' });
});


module.exports = server;