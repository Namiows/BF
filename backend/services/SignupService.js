const { createRegister, getUserByEmail } = require('../models/SignupModel');
const {
  validateEmail,
  validateName,
  validatePassword,
} = require('../utils/validationFuncs');
const { OK, BAD_REQUEST } = require('../utils/allStatusCode');
const { createToken } = require('../utils/createToken');

const objErr = (err, status) => ({ err, status });

const signupValidation = (body) => {
  const { name, email, password, role } = body;

  switch (false) {
    case validateEmail(email):
    case validatePassword(password):
    case validateName(name):
    case role:
      return objErr('All fields must be filled', BAD_REQUEST);
    default: return null;
  } 
};

const emailIsExists = async (email) => {
  const [returned] = await getUserByEmail(email);
  if (returned.length !== 0) return objErr('E-mail already in database.', BAD_REQUEST);
  return null;
};

const SignupService = async (req, res) => {
  const { body } = req;
  
  const error = signupValidation(body);
  if (error) return res.status(error.status).json({ err: error.err });

  const error2 = await emailIsExists(body.email);
  if (error2) return res.status(error2.status).json({ err: error2.err });

  const user = await createRegister(body);

  const { password, name, ...userWithoutPasswordAndName } = user;
  const { id, password: _password, ...userWithoutPassword } = user;
  const token = createToken(userWithoutPasswordAndName);

  res.status(OK).json({ ...userWithoutPassword, token });
};

module.exports = SignupService;
