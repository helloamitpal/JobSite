import { combineReducers } from 'redux';
import jobReducer from '../containers/jobs/jobReducer';

// this is the root reducer to combine module wise reducers
const rootReducer = combineReducers({
  job: jobReducer
});

export default rootReducer;
