import casesReducer from './casesReducer'
import auth from './auth';
import signup from './signup'
import { combineReducers } from 'redux';

// const rootReducer = combineReducers({
//     cases: casesReducer
// })

const rootReducer = combineReducers({signup, auth})

export default rootReducer;