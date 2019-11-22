import {combineReducers} from 'redux';

const INITIAL_STATE = {
  test: '123',
};

const homeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  home: homeReducer,
});
