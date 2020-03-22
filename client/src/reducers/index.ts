import { combineReducers } from 'redux';
import currentUser from './auth.reducer';

const rootReducer = combineReducers({
  currentUser,
});

export default rootReducer;
