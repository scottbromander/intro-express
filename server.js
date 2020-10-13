const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', function (request, response) {
  response.send('Meow');
});

app.get('/dogs', function (request, response) {
  response.send('Woof!');
});

app.listen(PORT, function () {
  console.log('Server is running!');
});
