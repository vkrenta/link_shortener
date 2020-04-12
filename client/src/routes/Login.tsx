import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { loginUser, disableButton } from '../actions';
import {
  enableButtonOnInput,
  inputOnBlur,
  validatePassword,
  validateUserName,
} from '../validators';
import ButtonOrPreloader from './components/ButtonOrPreloader';

const Login = () => {
  const userNameOrEmail = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(disableButton());
  }, [dispatch]);

  return (
    <>
      <div className="row">
        <div className="col s6 offset-s3">
          <div className="card">
            <div className="card-content">
              <span className="card-title">Log in</span>
              <div>
                <div className="input-field">
                  <input
                    ref={userNameOrEmail}
                    id="userNameOrEmail"
                    type="text"
                    name="userNameOrEmail"
                    className="validate"
                    onBlur={() =>
                      inputOnBlur(userNameOrEmail, validateUserName)
                    }
                    onInput={() => onInput()}
                  />
                  <label className="active" htmlFor="userNameOrEmail">
                    Username or Email
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
              </div>
            </div>
            <div className="card-action">
              <ButtonOrPreloader
                buttonText="Log In"
                onClick={() =>
                  loginOnClick(userNameOrEmail, password, dispatch)
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
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
        value: userNameOrEmail.current?.value!,
      }
    );
  }
};

function loginOnClick(
  userNameOrEmail: React.RefObject<HTMLInputElement>,
  password: React.RefObject<HTMLInputElement>,
  dispatch: Dispatch
) {
  dispatch(
    loginUser(userNameOrEmail.current?.value!, password.current?.value!)
  );
}

export default Login;
