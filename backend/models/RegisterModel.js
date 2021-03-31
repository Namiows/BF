const connection = require('../database/connection');

const getUserByEmail = async (email) => {
  const user = await connection().then((db) => db.connection('users').findOne([email]))
  if(!user) return null
  return user;
}

const createRegister = async (name, email, password) => {
  connection().then((db) => {
    db.collection('users').insertOne({ name, email, password })
  })
}

module.exports = {
  getUserByEmail,
  createRegister
}