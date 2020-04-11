import { LinkData, Action } from '../types';
import { SET_LINKS, CLEAR_LINKS } from '../actions';

const loadedLinks = (state: Array<LinkData> | null = null, action: Action) => {
  switch (action.type) {
    case SET_LINKS:
      return action.payload.links;
    case CLEAR_LINKS:
      return null;
    default:
      return state;
  }
};

export default loadedLinks;
