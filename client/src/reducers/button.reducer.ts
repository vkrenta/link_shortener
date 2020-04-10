import { ENABLE_BUTTON, DISABLE_BUTTON } from '../actions';
import { Action } from '../types';

const isButtonDisabled = (state: boolean = true, action: Action): boolean => {
  switch (action.type) {
    case ENABLE_BUTTON:
    case DISABLE_BUTTON:
      return action.payload.disabled;
    default:
      return state;
  }
};

export default isButtonDisabled;
