import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { Dispatch } from 'redux';
import { registerUser, enableButton, disableButton } from '../actions';

type Validator = {
  validator: Function;
  value: string;
};

export function enableButtonOnInput(
  dispatch: Function,
  ...validators: Validator[]
) {
  if (validate(...validators)) return dispatch(enableButton());
  return dispatch(disableButton());
}
// export function enableButtonOnInput(
//   email: React.RefObject<HTMLInputElement>,
//   password: React.RefObject<HTMLInputElement>,
//   userName: React.RefObject<HTMLInputElement>,
//   dispatch: Dispatch
// ) {
//   if (email.current && password.current && userName.current) {
//     if (
//       validate(
//         { value: email.current.value, validator: validateEmail },
//         { value: password.current.value, validator: validatePassword },
//         { value: userName.current.value, validator: validateUserName }
//       )
//     )
//       return dispatch(enableButton());
//     return dispatch(disableButton());
//   }
// }

// export function enableButtonOnInput(
//   userName: React.RefObject<HTMLInputElement>,
//   password: React.RefObject<HTMLInputElement>,
//   dispatch: Dispatch
// ) {
//   if (password.current && userName.current) {
//     if (
//       validate(
//         { value: password.current.value, validator: validatePassword },
//         { value: userName.current.value, validator: validateUserName }
//       )
//     )
//       return dispatch(enableButton());
//     return dispatch(disableButton());
//   }
// }

export function inputOnBlur(
  input: React.RefObject<HTMLInputElement>,
  validate: Function
) {
  if (input.current) {
    if (
      !validate(input.current.value) &&
      input.current.value !== '' &&
      !input.current.className.endsWith(' bad-input')
    ) {
      return (input.current.className += ' bad-input');
    }
    input.current.className = input.current.className.replace(' bad-input', '');
  }
}

export function validate(...params: Validator[]) {
  const result = params.map((param) => param.validator(param.value));
  if (result.includes(false)) return false;
  return true;
}

export function validateUserName(userName: string) {
  if (userName.includes(' ') || userName.length < 1) return false;
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
