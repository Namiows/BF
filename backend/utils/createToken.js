const jwt = require('jsonwebtoken');

const secret = 'byefive-give-me-a-chance';

const headers = {
  algorithm: 'HS256',
  expiresIn: '7D',
};

const createToken = (payload) => jwt.sign(payload, secret, headers);

module.exports = {
  createToken,
  secret,
};