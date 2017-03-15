'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
// const conString = process.env.DATABASE_URL || 'postgres://localhost:5432';

app.get('/', (request, response) => response.sendFile('index.html', {root: './public'}));
app.get('/projects', (request, response) => response.sendFile('index.html', {root: './public'}));
app.get('/about', (request, response) => response.sendFile('index.html', {root: './public'}));
app.get('/contact', (request, response) => response.sendFile('index.html', {root: './public'}));


app.use(express.static('./public'));
app.get('*', function(request, response) {
  console.log('index.html');
  response.sendFile('./index.html', {root: '.'});
});

app.listen(PORT, function() {
  console.log(`Listening on PORT ${PORT}`);
});
