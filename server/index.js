const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send({ go: 'guru'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
