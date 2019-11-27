export const ADD = 'ADD';
export const MINUS = 'MINUS';
export const RESET = 'RESET';

export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILED = 'FETCH_DATA_FAILED';

export const add = (payload) => ({
  type: ADD,
  payload,
});

export const minus = (payload) => ({ type: MINUS, payload });

export const reset = (payload) => ({ type: RESET, payload });

export const fetchData = (dataIndex) => ({ type: FETCH_DATA, payload: { userId: dataIndex } });

export const fetchDataSuccess = (userData) => ({
  type: FETCH_DATA_SUCCESS,
  payload: { items: userData },
});

export const fetchDataFailed = () => ({ type: FETCH_DATA_FAILED });