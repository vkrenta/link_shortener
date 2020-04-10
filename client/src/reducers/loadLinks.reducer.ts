import { LinkData, Action } from '../types';
import { SET_LINKS } from '../actions';

const loadedLinks = (state: Array<LinkData> = [], action: Action) => {
  switch (action.type) {
    case SET_LINKS:
      return action.payload.links;
    default:
      return state;
  }
};

export default loadedLinks;
