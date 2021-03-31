import React, { useState } from 'react';
import { useHistory } from 'react-router';

function LoginPage() {
  const history = useHistory()
  // const [user, setUser] = useState('');
  const [inputValues, setInputValues] = useState({ email: '', password: '' });

  const handleChange = ({ target }) => {
    setInputValues({ ...inputValues, [target.name]: target.value });
  };

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
        <label htmlFor="pass">
          Senha
          <input
            type="password"
            id="pass"
            name="password"
            value={ inputValues.password}
            onChange={ handleChange }
          />
        </label>
        {/* <span>{ errMessage }</span> */}
        <button
          id="enter"
          type="button"
          onClick={ () => history.push('/profile') }
        >
          Entrar
        </button>
        <button
          id="sign-up"
          type="button"
          onClick={ () => history.push('/signup') }
          className="bttn-text"
        >
          Ainda não tenho conta
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
