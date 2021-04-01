import React, { useContext, useState,useEffect } from 'react';
import AppContext from '../context/AppContext';
import fetchApiJsonBody from '../services/fetchApi';
import validationFuncs from '../services/validationFuncs';

function SignupPage() {
  const {
    user,
    setUser,
  } = useContext(AppContext);
  
  if (user.token) history.push('/profile');

  const [inputValues, setInputValues] = useState({
    name: '',
    email: '',
    password: '',
  });

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

  const handleChange = ({ target }) => {
    setInputValues({ ...inputValues, [target.name]: target.value});
  }

  const handleClick = async() => {
    const signupReturn = await fetchApiJsonBody('/signup', inputValues);
    if(signupReturn.err) {
      setErrMessage(signupReturn.err);
      return;
    }
    setUser(signupReturn);
    history.push('/profile');
  }

  return(
    <>
      <label htmlFor="name">
        Nome
        <input
          type="text"
          name="name"
          id="name"
          value= {inputValues.name}
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="email">
        email
        <input
          type="email"
          name="email"
          id="email"
          value= {inputValues.email}
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="password">
        Senha
        <input
          type="password"
          name="password"
          id="password"
          value= {inputValues.password}
          onChange={ handleChange }
        />
      </label>
      <span>{errMessage}</span>
      <button
        type="button"
        disabled={ valid }
        onClick={ handleClick }
      >
        Cadastrar
      </button>
    </>
  );
}

export default SignupPage;