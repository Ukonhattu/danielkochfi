//make express app that serves static /dist
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static('dist'));

//start server
app.listen(port, () => {
  console.log('Server is up!');
});

