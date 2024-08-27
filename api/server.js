require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const server = express();
const axios = require('axios');

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



async function sendEmail(subject, message) {
  const data = JSON.stringify({
    "Messages": [{
      "From": {"Email": "strickerbro@gmail", "Name": "Porfolio Site"},
      "To": [{"Email": "strickerbro@gmail", "Name": "Nick Stricker"}],
      "Subject": subject,
      "TextPart": message
    }]
  });

  const config = {
    method: 'post',
    url: 'https://api.mailjet.com/v3.1/send',
    data: data,
    headers: {'Content-Type': 'application/json'},
    auth: {username: '68adf2ba533ef188c81c6c6567b9fc8d', password: '4de072936905bfd10853fc921a37127a'},
  };

  return axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

}

// define your own email api which points to your server.
server.post('/api/sendemail/', function (req, res) {
  const {name, email, message} = req.body;
  //implement your spam protection or checks.
  sendEmail(name + " - " + email, message);
});

module.exports = server;