import React from 'react';

function LoginPage() {
  return (
    <div className="login-register">
      <form>
        <label htmlFor="email">
          Email
          <input  
            type="email"
            id="email"
            name="email"
          />
        </label>
        <label htmlFor="pass">
          Senha
          <input
            type="password"
            id="pass"
            name="password"
          />
        </label>
        {/* <span>{ errMessage }</span> */}
        <button
          id="enter"
          type="button"
        >
          Entrar
        </button>
        <button
          id="sign-up"
          type="button"
          className="bttn-text"
        >
          Ainda não tenho conta
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
