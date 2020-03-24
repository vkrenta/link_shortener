import { Action, INIT_PRELOADER, END_PRELOADER } from '../actions';

const inProcess = (state: boolean = false, action: Action): boolean => {
  switch (action.type) {
    case INIT_PRELOADER:
      return true;
    case END_PRELOADER:
      return false;
    default:
      return state;
  }
};

export default inProcess;
