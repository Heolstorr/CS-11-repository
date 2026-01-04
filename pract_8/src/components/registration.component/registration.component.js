import { useEffect, useRef, useState } from 'react';
import classes from './registration.module.css';
import show from './imgs/view.png'
import hide from './imgs/hide.png'
import {
  getPasswrodErrors,
  getEmailErrors
} from './validationRules.js'
import { useNavigate } from 'react-router-dom'
import { AuthorizedWrapper } from '../wrapper/wrapper.component.js';

export const Registration = () => {
  console.log('Registration render')
  const [passwordState, setPasswordState] = useState('hide')
  const [errors, setErrors] = useState([])
  const navigate = useNavigate()

  const passwordRef = useRef()
  const emailRef = useRef()

  const singUpHandler = () => {
    const password = passwordRef.current.value.trim()
    const email = emailRef.current.value.trim()
    console.log("password:", password)

    const errors = [
      ...getPasswrodErrors(password),
      ...getEmailErrors(email)
    ]
    if (errors.length != 0) {
      setErrors(errors)
      return
    }

    localStorage.setItem('token', crypto.randomUUID())
    navigate('/')
  }


  return (
    <div class="form-container sign-up-container">
      <div className={classes.wrapper}>
        <h1 className={classes.h1}>Create Account</h1>
        <input className={classes.input} type="text" placeholder="Name" />
        <input
          ref={emailRef}
          className={classes.input}
          type="email" placeholder="Email"
          onChange={() => setErrors([])}
        />
        <div className={classes.password}>
          <input
            ref={passwordRef}
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
            onClick={singUpHandler}
            className={classes.button}
          >Sign Up</button>

          <button
            className={classes.button}
            onClick={() => navigate('/login')}
          >To login</button>
        </div>
      </div>
    </div>);
}

