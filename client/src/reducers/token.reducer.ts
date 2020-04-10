import { SET_TOKEN, REMOVE_TOKEN } from '../actions';
import { Action } from '../types';

const token = (state: string | null = null, action: Action) => {
  switch (action.type) {
    case SET_TOKEN:
      return action.payload.token;
    case REMOVE_TOKEN:
      return null;
    default:
      return state;
  }
};

export default token;
