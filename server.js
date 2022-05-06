var express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use('/', require('./routes'))

app.get('/pelda', (req, res) => {
  res.status(200).json(({status: 'UP'}))
})
