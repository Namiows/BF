const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

const app = express();

const PORT = 3001;

app.use(cors());

app.use((req, _res, next) => {
  console.log({
    data: new Date(),
    method: req.method,
    router: req.originalUrl,
  });
  next();
});

app.use(bodyParser.json());

app.use((err, _req, res) => {
  console.error({ err });
  res.status(500).json({ erro: 'erro interno' });
});

app.listen(PORT, () => console.log('running port', PORT));