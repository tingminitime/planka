import { LOCATION_CHANGE_HANDLE } from './actions';

const createRouterReducer = (history) => {
  const initialState = {
    location: history.location,
    action: history.action,
  };

  return (state = initialState, { type, payload } = {}) => {
    if (type === LOCATION_CHANGE_HANDLE) {
      const { location, action, isFirstRendering } = payload;

      if (isFirstRendering) {
        return state;
      }

      return {
        ...state,
        location,
        action,
      };
    }

    return state;
  };
};

export default createRouterReducer;
