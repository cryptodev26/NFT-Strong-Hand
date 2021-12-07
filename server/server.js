// import express (after npm install express)
const express = require('express');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');

// create new express app and save it as "app"
const app = express();

// server configuration
const PORT = 8000;

app.use(cors());
app.use(bodyParser.json());

// create a route for the app
app.post('/',function(req, res) {
  let data = 'wallet address: ' + req.body.address + 
            ' time: ' + req.body.time +
            ' url: ' + req.body.url + "\n"
  fs.appendFile('log.txt', data, function (err) {
    if(err) {
      throw err;
    }
    console.log('saved!')
  })
  return res.status(200).send({ data: 'success' });
});

// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});