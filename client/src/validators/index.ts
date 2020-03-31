import React from 'react';
import { enableButton, disableButton } from '../actions';

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

export function validateUrl(url: string) {
  if (
    /^(?:http(s)?:\/\/)[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/gm.test(
      url
    ) === false
  )
    return false;
  return true;
}
