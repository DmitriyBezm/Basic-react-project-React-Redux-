import {GET_DATA} from '../actions/types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_DATA:
      return [...action.payload.data];

    default:
      return state;
  }
};
