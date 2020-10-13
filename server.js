const express = require('express');
const app = express();

app.get('/', function (request, response) {
  response.send('Meow');
});

app.get('/dogs', function (request, response) {
  response.send('Woof!');
});

app.listen(3001, function () {
  console.log('Server is running on port 3001!');
});
