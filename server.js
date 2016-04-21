var express = require('express');
var app = express();

//middleware to serve static files
app.use(express.static('images'));

app.get('/', function (req, res) {
  res.send('hello world');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
