import { combineReducers } from 'redux';
import todo from '../modules/todo/_reducers/todoReducers';

// Combine Reducers
const rootReducer = combineReducers({
  todo,
});

export default rootReducer;
