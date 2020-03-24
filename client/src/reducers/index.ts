import { combineReducers } from 'redux';
import currentUser from './auth.reducer';
import isButtonDisabled from './button.reducer';
import error from './error.reducer';

const rootReducer = combineReducers({
  currentUser,
  isButtonDisabled,
  error,
});

export default rootReducer;
