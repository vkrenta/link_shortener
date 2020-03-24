import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { Dispatch } from 'redux';
import { registerUser, enableButton, disableButton } from '../actions';

export function enableButtonOnInput(
  email: React.RefObject<HTMLInputElement>,
  password: React.RefObject<HTMLInputElement>,
  dispatch: Dispatch
) {
  if (email.current && password.current) {
    if (validate(email.current.value, password.current.value))
      return dispatch(enableButton());
    return dispatch(disableButton());
  }
}

export function passwordOnBlur(
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

export function validate(email: string, password: string) {
  if (!validateEmail(email)) return false;
  if (!validatePassword(password)) return false;
  return true;
}

export function validateEmail(email: string) {
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gim.test(
      email
    ) === false
  )
    return false;
  return true;
}

export function validatePassword(password: string) {
  if (/(?=.*[0-9])(?=.*[a-zа-я])(?=.*[A-ZА-Я]).{8,}/.test(password) === false)
    return false;
  return true;
}
