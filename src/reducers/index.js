import casesReducer from './casesReducer'
import auth from './auth';
import signup from './signup'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    cases: casesReducer,
    signup: signup,
    auth: auth
})

export default rootReducer;