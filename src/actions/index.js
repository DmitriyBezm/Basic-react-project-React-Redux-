import {GET_FILTERS, SET_FILTER, RESET_FILTER, GET_DATA} from './types';

export const getFilters = (filters) => (dispatch) => {
  dispatch({type: GET_FILTERS, payload: {filters}})
};

export const getData = (data) => (dispatch) => {
  dispatch({type: GET_DATA, payload: {data}})
}

export const setFilter = ({code, title}) => (dispatch) => {
  dispatch({type: SET_FILTER, payload: {code, title}})
}

export const resetFilter = (id) => (dispatch) => {
  dispatch({type: RESET_FILTER, payload: {id}})
}
