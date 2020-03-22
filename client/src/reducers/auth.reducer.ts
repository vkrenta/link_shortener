import { Action, SET_USER } from '../actions';
interface IUser {
  user: string;
  authenticated: boolean;
}
const currentUser = (
  state: IUser = { user: '', authenticated: false },
  action: Action
): IUser => {
  switch (action.type) {
    case SET_USER:
      console.log(action);
      return { user: action.payload.user, authenticated: true };
    default:
      return state;
  }
};

export default currentUser;
