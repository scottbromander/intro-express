const express = require('express');
const app = express();
const catMessage = require('./modules/meow');
const PORT = process.env.PORT || 3000;

const people = ['Scott', 'Rachael', 'Myron'];

app.get('/', (req, res) => {
  console.log(catMessage);
  res.send(catMessage);
});

app.get('/dogs', (req, res) => {
  res.send('Woof!');
});

app.get('/prime', (req, res) => {
  res.send(people);
});

app.get('/number', (req, res) => {
  res.send({ value: 2 });
});

app.listen(PORT, function () {
  console.log('Server is running!');
});
