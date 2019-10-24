import {
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
} from '../actions';

export default (
    state = {
        isSigningUp: false,
        signupError: false,
        isAccountCreated: false,
        user: {}
    }, 
    action) => {
    switch (action.type) {
        case SIGNUP_REQUEST:
            return {
                ...state,
                isSigningUp: true,
                signupError: false
            };
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isAccountCreated: true,
                isSigningUp: false,
                user: action.user
            };
        case SIGNUP_FAILURE:
            return {
                ...state,
                isAccountCreated: false,
                isSigningUp: false,
                signupError: true
            };
        default:
            return state;
    }
}