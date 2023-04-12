const express = require('express');
const db = require('./config/db');
const app = require('./app')
const port = 3040;

app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`);
});

process.on('uncaughtException', function (err) {
  console.log(err);
}); 
