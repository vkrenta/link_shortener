import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import { Dispatch } from 'redux';
import { loginUser } from '../actions';
import {
  enableButtonOnInput,
  inputOnBlur,
  validatePassword,
  validateUserName,
} from '../validators';
import ButtonOrPreloader from './components/buttonOrPreloader';
import { Redirect } from 'react-router-dom';

const Login = () => {
  const userNameOrEmail = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const buttonState: boolean = useSelector(
    (state: any) => state.isButtonDisabled
  );
  const inProcess: boolean = useSelector((state: any) => state.inProcess);

  const error = useSelector((state: any) => state.error);

  if (error?.code === 500) {
    return <Redirect to="/internal" />;
  }

  return (
    <div>
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
                  />
                  <label className="active" htmlFor="password">
                    Password
                  </label>
                </div>
              </div>
            </div>
            <div className="card-action">
              <ButtonOrPreloader
                buttonName="Log In"
                inProcess={inProcess}
                buttonState={buttonState}
                onClick={() =>
                  loginOnClick(userNameOrEmail, password, dispatch)
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
