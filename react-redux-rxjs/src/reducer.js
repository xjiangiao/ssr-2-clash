import { combineReducers } from 'redux';
import { ADD, FETCH_DATA_FAILED, FETCH_DATA_SUCCESS, MINUS, RESET } from "./action";

const defaultState = {
  clickTime: 0,
};

const initialState = {
  items: [],
};

export const clickReducers = (state = defaultState, action) => {
  switch (action.type) {
    case ADD:
      console.log(action);
      return {
        ...state,
        clickTime: state.clickTime + 1,
      };
    case MINUS:
      return {
        ...state,
        clickTime: state.clickTime - 1,
      };
    case RESET:
      return {
        ...state,
        clickTime: 0,
      };
    default:
      return state;
  }
};

export const fetchReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        items: [...state.items, action.payload.items],
      };
    case FETCH_DATA_FAILED:
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
};

export default combineReducers({
  clickReducers, fetchReducers,
});

// export default clickReducers;