const { MongoClient } = require('mongodb');
require('dotenv').config();

const MONGODB_URL = 'mongodb://127.0.0.1:27017';

const connection = () => {
  return MongoClient
    .connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => conn.db('fiveBD'))
    .catch((err) => {
      console.error(err);
      process.exit(1)
    });
};

module.exports = connection;