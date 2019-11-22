import {combineReducers} from 'redux';
import homeReducer from './home';
import languageReducer from './language';

export default combineReducers({
  home: homeReducer,
  language: languageReducer,
});
