import React, { useRef } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { registerUser } from '../actions';

const Signup = () => {
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="col">
        <div className="input-field col s6">
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

        <div className="input-field col s6">
          <input
            ref={password}
            id="password"
            type="password"
            name="password"
            className="validate"
          />
          <label className="active" htmlFor="password">
            Password
          </label>
        </div>

        <button
          className="btn waves-effect waves-light"
          onClick={() => registerOnClick(email, password)}
        >
          Submit
        </button>
      </div>
    </div>
  );

  function registerOnClick(
    email: React.RefObject<HTMLInputElement>,
    password: React.RefObject<HTMLInputElement>
  ) {
    if (email.current && password.current) {
      if (!validate(email.current.value, password.current.value))
        return alert('Incorrect data');

      dispatch(registerUser(email.current.value, password.current.value));
    }
  }
};

function validate(email: string, password: string) {
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gim.test(
      email
    ) === false
  )
    return false;
  if (/(?=.*[0-9])(?=.*[a-zа-я])(?=.*[A-ZА-Я]).{8,}/.test(password) === false)
    return false;
  return true;
}

export default Signup;
