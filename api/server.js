require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(require("body-parser").text());

const userRouter = require('./routers/users/users-router.js');
const eventsRouter = require('./routers/events/events-router.js');

server.use("/api/users", userRouter);
server.use("/api/events", eventsRouter);

server.get('/', (req, res) => {
    res.status(200).json({ msg: 'Server Up!' });
});

module.exports = server;