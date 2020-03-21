import { Action, SET_USER } from '../actions';

const register = (state: string = '', action: Action): string => {
  switch (action.type) {
    case SET_USER:
      return action.payload.user;
    default:
      return state;
  }
};

export default register;
