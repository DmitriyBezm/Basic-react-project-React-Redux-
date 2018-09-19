import {GET_FILTERS, RESET_FILTER, SET_FILTER} from '../actions/types';

const INITIAL_STATE = {
  categories: [],
  title: null,
  code: 'all',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_FILTERS:
      return {
        ...state,
        categories: [...action.payload.filters],
      };

    case SET_FILTER:
      return {
        ...state,
        code: action.payload.code,
        title: action.payload.title,
      };

    case RESET_FILTER:
      return {
        ...state,
        code: 'all',
        title: null,
      };

    default:
      return state;
  }
};
