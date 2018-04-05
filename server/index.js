const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send({ go: 'guru'});
});

app.listen(5000);
