// const mongoose = require('mongoose');
// const dotenv = require('dotenv');

// dotenv.config();

// module.exports = mongoose.connect(process.env.MONGODB_URI, (err) => {
//   if(err) return console.error(err);
//   console.log('conected to MongoDB');
// });
// const { MongoClient } = require('mongodb');

// const MONGODB_URL = 'mongodb://127.0.0.1:27017';

// const connection = () => {
//   return MongoClient
//     .connect(MONGODB_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     })
//     .then((conn) => conn.db('fiveDB'))
//     .catch((err) => {
//       console.error(err);
//       process.exit(1)
//     });
// };