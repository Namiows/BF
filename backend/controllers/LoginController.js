const { Router } = require('express');
const LoginService = require('../services/LoginService');

const LoginController = new Router();

LoginController.post('/', LoginService);

module.exports = LoginController;