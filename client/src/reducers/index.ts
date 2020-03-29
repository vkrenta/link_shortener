import { combineReducers } from 'redux';
import currentUser from './auth.reducer';
import isButtonDisabled from './button.reducer';
import error from './error.reducer';
import inProcess from './inProcess.reducer';
import token from './token.reducer';

const rootReducer = combineReducers({
  currentUser,
  isButtonDisabled,
  error,
  inProcess,
  token,
});

export default rootReducer;
