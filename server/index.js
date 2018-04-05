const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send({ Dal: 'is gay'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
