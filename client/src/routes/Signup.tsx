import React, { useRef } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { Dispatch } from 'redux';
import { registerUser } from '../actions';

const Signup = () => {
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const passwordInputDiv = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const button = useRef<HTMLButtonElement>(null);

  return (
    <div>
      <div className="row">
        <div className="col s6 offset-s3">
          <div className="card">
            <div className="card-content">
              <span className="card-title">Sign up</span>
              <div>
                <div className="input-field">
                  <input
                    ref={email}
                    id="email"
                    type="email"
                    name="user"
                    className="validate"
                  />
                  <label className="active" htmlFor="email">
                    Email
                  </label>
                </div>

                <div className="input-field" ref={passwordInputDiv}>
                  <input
                    ref={password}
                    onBlur={() => passwordOnBlur(password, passwordInputDiv)}
                    onInput={() => enableButtonOnInput(email, password, button)}
                    id="password"
                    type="password"
                    name="password"
                    className="validate"
                  />
                  <label className="active" htmlFor="password">
                    Password
                  </label>
                </div>
              </div>
            </div>
            <div className="card-action">
              <button
                ref={button}
                disabled
                className="btn waves-effect waves-light blue"
                onClick={() => registerOnClick(email, password, dispatch)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function enableButtonOnInput(
  email: React.RefObject<HTMLInputElement>,
  password: React.RefObject<HTMLInputElement>,
  button: React.RefObject<HTMLButtonElement>
) {
  if (email.current && password.current && button.current) {
    if (validate(email.current.value, password.current.value))
      return (button.current.disabled = false);
    return (button.current.disabled = true);
  }
}

function passwordOnBlur(
  password: React.RefObject<HTMLInputElement>,
  passwordInputDiv: React.RefObject<HTMLDivElement>
) {
  if (password.current && passwordInputDiv.current) {
    if (
      !validatePassword(password.current.value) &&
      password.current.value !== '' &&
      !passwordInputDiv.current.className.endsWith(' bad-input')
    ) {
      return (passwordInputDiv.current.className += ' bad-input');
    }
    passwordInputDiv.current.className = passwordInputDiv.current.className.replace(
      ' bad-input',
      ''
    );
  }
}

function registerOnClick(
  email: React.RefObject<HTMLInputElement>,
  password: React.RefObject<HTMLInputElement>,
  dispatch: Dispatch
) {
  if (email.current && password.current) {
    if (!validate(email.current.value, password.current.value))
      return alert('Incorrect data');

    dispatch(registerUser(email.current.value, password.current.value));
  }
}

function validate(email: string, password: string) {
  if (!validateEmail(email)) return false;
  if (!validatePassword(password)) return false;
  return true;
}

function validateEmail(email: string) {
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gim.test(
      email
    ) === false
  )
    return false;
  return true;
}

function validatePassword(password: string) {
  if (/(?=.*[0-9])(?=.*[a-zа-я])(?=.*[A-ZА-Я]).{8,}/.test(password) === false)
    return false;
  return true;
}

export default Signup;
