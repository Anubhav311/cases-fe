import casesReducer from './casesReducer';
import partsReducer from './partsReducer';
import auth from './auth';
import signup from './signup'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    cases: casesReducer,
    parts: partsReducer,
    signup: signup,
    auth: auth
})

export default rootReducer;