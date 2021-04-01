const { Router } = require('express');
const SignupService = require('../services/SignupService');

const SignupController = new Router();

SignupController.post('/', SignupService);

module.exports = SignupController;