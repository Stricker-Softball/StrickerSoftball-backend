const express = require('express');
const cors = require('cors');
const server = express();
 
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})

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
