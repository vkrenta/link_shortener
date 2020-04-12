import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { registerUser, disableButton } from '../actions';
import {
  enableButtonOnInput,
  inputOnBlur,
  validatePassword,
  validateUserName,
  validateEmail,
} from '../validators';
import ButtonOrPreloader from './components/ButtonOrPreloader';

const Signup = () => {
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const rePassword = useRef<HTMLInputElement>(null);
  const userName = useRef<HTMLInputElement>(null);
  const passwordInputDiv = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(disableButton());
  }, [dispatch]);

  return (
    <div>
      <div className="row">
        <div className="col s6 offset-s3">
          <div className="card">
            <div className="card-content">
              <span className="card-title">Sign up</span>
              <div className="input-field" ref={passwordInputDiv}>
                <input
                  ref={userName}
                  onBlur={() => {
                    inputOnBlur(userName, validateUserName);
                  }}
                  onInput={() => onInput()}
                  id="userName"
                  type="text"
                  name="userName"
                  className="validate"
                />
                <label className="active" htmlFor="userName">
                  Username
                </label>
              </div>

              <div>
                <div className="input-field">
                  <input
                    ref={email}
                    id="email"
                    type="email"
                    name="user"
                    className="validate"
                    onInput={() => onInput()}
                  />
                  <label className="active" htmlFor="email">
                    Email
                  </label>
                </div>

                <div className="input-field">
                  <input
                    ref={password}
                    onBlur={() => inputOnBlur(password, validatePassword)}
                    onInput={() => onInput()}
                    id="password"
                    type="password"
                    name="password"
                    className="validate"
                    data-error="Password must have as minimum 8 symbols, lower and upper case characters, numbers from 0 to 9"
                  />
                  <label className="active" htmlFor="password">
                    Password
                  </label>
                </div>

                <div className="input-field">
                  <input
                    ref={rePassword}
                    onBlur={() => inputOnBlur(rePassword, validateRePassword)}
                    onInput={() => onInput()}
                    id="rePassword"
                    type="password"
                    name="rePassword"
                    className="validate"
                  />
                  <label className="active" htmlFor="rePassword">
                    Reenter Password
                  </label>
                </div>
              </div>
            </div>
            <div className="card-action">
              <ButtonOrPreloader
                buttonText="Sign Up"
                onClick={() =>
                  registerOnClick(email, password, userName, dispatch)
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  function onInput() {
    enableButtonOnInput(
      dispatch,
      {
        validator: validatePassword,
        value: password.current?.value!,
      },
      {
        validator: validateUserName,
        value: userName.current?.value!,
      },
      { validator: validateEmail, value: email.current?.value! },
      {
        validator: validateRePassword,
        value: rePassword.current?.value!,
      }
    );
  }

  function validateRePassword(rePassword: string) {
    if (!validatePassword(rePassword)) return false;
    if (rePassword !== password.current?.value) return false;
    return true;
  }
};

function registerOnClick(
  email: React.RefObject<HTMLInputElement>,
  password: React.RefObject<HTMLInputElement>,
  userName: React.RefObject<HTMLInputElement>,
  dispatch: Function
) {
  dispatch(
    registerUser({
      email: email.current?.value!,
      userName: userName.current?.value!,
      password: password.current?.value!,
    })
  );
}

export default Signup;
