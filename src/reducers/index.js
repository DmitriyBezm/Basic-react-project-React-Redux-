import {combineReducers} from 'redux';

import filter from './filter';
import data from './data';

export default combineReducers({
  filter,
  data,
});
