import { CUSTOM_ERROR, INTERNAL_ERROR, CLEAR_ERROR } from '../actions';
import { IError, Action } from '../types';

const error = (state: IError = { message: '' }, action: Action): IError => {
  switch (action.type) {
    case CUSTOM_ERROR:
      return { code: action.payload.code, message: action.payload.message };
    case INTERNAL_ERROR:
      return { code: 500, message: action.payload.message };
    case CLEAR_ERROR:
      return { message: '' };
    default:
      return state;
  }
};

export default error;
