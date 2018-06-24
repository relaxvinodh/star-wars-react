import { combineReducers } from 'redux';
import { results } from './results';
import { planet } from './planet';
import { authenticate } from './authenticate';

export default combineReducers({
  results,
  planet,
  authenticate
});
