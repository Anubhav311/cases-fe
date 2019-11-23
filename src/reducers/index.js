import { skillsReducer } from './reducers';
import { partsReducer } from './reducers';
import auth from './auth';
import signup from './signup'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    skills: skillsReducer,
    parts: partsReducer,
    signup,
    auth
})

export default rootReducer;