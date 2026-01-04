import { useEffect, useRef, useState } from 'react';
import classes from './login.module.css';
import show from './imgs/view.png'
import hide from './imgs/hide.png'
import { useNavigate } from 'react-router-dom'
import { AuthorizedWrapper } from '../wrapper/wrapper.component';

export const Login = () => {
  const [passwordState, setPasswordState] = useState('hide')
  const [errors, setErrors] = useState([])
  const navigate = useNavigate()


  const loginHandler = () => {
    const token = crypto.randomUUID()
    localStorage.setItem('token', token)
    navigate('/')
  }

  return (
    <div class="form-container sign-up-container">
      <div className={classes.wrapper}>
        <h1 className={classes.h1}>Login Account</h1>
        <input
          className={classes.input}
          type="email" placeholder="Email" />
        <div className={classes.password}>
          <input
            className={classes.input}
            type={passwordState === 'hide' ? "password" : "text"}
            placeholder="Password"
            onChange={() => setErrors([])}
          />
          <div
            // onMouseDown={() => setPasswordState('show')}
            // onMouseUp={() => setPasswordState('hide')}
            onClick={() => [
              setPasswordState(prev => {
                // if (prev == 'hide') {
                //   return 'show'
                // } else {
                //   return 'hide'
                // }

                // condition ? <value if true> : <value if false>
                return prev == 'hide' ? 'show' : 'hide'
              })
            ]}
            className={classes.passwordIcon}>
            <img src={passwordState == 'hide' ? hide : show} />
          </div>
        </div>
        <div className={classes.errors}>
          {
            errors.map(error => {
              return (<li>{error}</li>)
            })
          }
        </div>
        <div className={classes.buttonWrapper}>
          <button
            onClick={loginHandler}
            className={classes.button}
          >Login</button>

          <button
            className={classes.button}
            onClick={() => navigate('/registration')}
          >To registration</button>
        </div>
      </div>
    </div>);
}

