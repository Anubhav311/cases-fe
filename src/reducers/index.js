import skills from './skillsReducer';
import parts from './partsReducer';
import auth from './auth';
import signup from './signup'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    skills,
    parts,
    signup,
    auth
})

export default rootReducer;