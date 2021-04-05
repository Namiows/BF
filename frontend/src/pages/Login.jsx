import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import validationFuncs from '../services/validationFuncs';
import fetchApiJsonBody from '../services/fetchApi';

function LoginPage() {
  const history = useHistory()
  // const [user, setUser] = useState('');
  const [inputValues, setInputValues] = useState({ email: '', password: '' });

  const handleChange = ({ target }) => {
    setInputValues({ ...inputValues, [target.name]: target.value });
  };

  const [valid, setValid] = useState(true);

  const isValid = () => {
    const email = validationFuncs.validateEmail(inputValues.email);
    const password = validationFuncs.validatePassword(inputValues.password);
    const name = validationFuncs.validateName(inputValues.name);
    if (email && name && password) {
      setValid(false);
    } else {
      setValid(true);
    }
  };

  useEffect(() => isValid(),
    [inputValues.name, inputValues.password, inputValues.email]);

  const [errMessage, setErrMessage] = useState('');

  const handleClick = async() => {
    const signinReturn = await fetchApiJsonBody('/login', inputValues);
    if(!signinReturn) {
      setErrMessage(signinReturn.err)
      return;
    }
    history.push('/profile');
  }

  return (
    <div className="login-register">
      <form>
        <label htmlFor="email">
          Email
          <input  
            type="email"
            id="email"
            name="email"
            value={ inputValues.email }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            id="pass"
            name="password"
            value={ inputValues.password}
            onChange={ handleChange }
          />
        </label>
        <span>{ errMessage }</span>
        <button
          id="enter"
          type="button"
          onClick={ handleClick }
        >
          Entrar
        </button>
        <button
          id="sign-up"
          type="button"
          onClick={ () => history.push('/signup') }
          disabled= { valid }
        >
          Ainda não tenho conta
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
