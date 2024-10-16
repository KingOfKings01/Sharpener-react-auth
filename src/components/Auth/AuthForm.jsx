import { useState } from 'react';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState("");

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {

      if (isLogin) {
        // Login logic

        alert("Login success", event.target.name.value);

      } else {
        // Sign up logic
        setMessage("Sending request...");
        
        // throw new Error("Email Exceed")
      }
    } catch (error) {
      console.error(error);
      setMessage("");
      alert(error.message)
    }

  }


  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <br />

      <form onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' name="email" id='email' required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            name="password"
            id='password'
            required
          />
        </div>

        {
          message ?
            <p >{message}</p>
            :
            <div className={classes.actions}>
              <button type='submit'>
                {isLogin ? 'Login' : 'Sign Up'}
              </button>
            </div>
        }

        <div className={classes.actions}>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
