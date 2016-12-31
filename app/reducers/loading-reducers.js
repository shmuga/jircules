// @flow
import { LOADING_FINISHED, LOADING_STARTED} from '../actions/loading-actions';

export default function loading(state: boolean = false, action: Object) {
  switch (action.type) {
    case LOADING_STARTED:
      return true;
    case LOADING_FINISHED:
      return false;
    default:
      return state;
  }
}
