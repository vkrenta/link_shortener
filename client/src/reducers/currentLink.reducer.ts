import { Action, SET_CURRENT_LINK, CLEAR_CURRENT_LINK } from '../actions';

const currentLink = (state: string | null = null, action: Action) => {
  switch (action.type) {
    case SET_CURRENT_LINK:
      return action.payload.short;
    case CLEAR_CURRENT_LINK:
      return null;
    default:
      return state;
  }
};

export default currentLink;
