import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { loginUser } from '../actions';
import { passwordOnBlur, enableButtonOnInput } from '../validators';
import ButtonOrPreloader from './components/buttonOrPreloader';
import { Redirect } from 'react-router-dom';

const Login = () => {
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const passwordInputDiv = useRef<HTMLDivElement>(null);
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
                    ref={email}
                    id="email"
                    type="email"
                    name="user"
                    className="validate"
                    onInput={() =>
                      enableButtonOnInput(email, password, dispatch)
                    }
                  />
                  <label className="active" htmlFor="email">
                    Email
                  </label>
                </div>

                <div className="input-field" ref={passwordInputDiv}>
                  <input
                    ref={password}
                    onBlur={() => passwordOnBlur(password, passwordInputDiv)}
                    onInput={() =>
                      enableButtonOnInput(email, password, dispatch)
                    }
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
                onClick={() => loginOnClick(email, password, dispatch)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function loginOnClick(
  email: React.RefObject<HTMLInputElement>,
  password: React.RefObject<HTMLInputElement>,
  dispatch: Dispatch
) {
  if (email.current && password.current) {
    dispatch(loginUser(email.current.value, password.current.value));
  }
}

export default Login;
