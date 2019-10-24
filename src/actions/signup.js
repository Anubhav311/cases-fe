import { myFirebase } from '../firebase/firebaseConfig';

export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";


const requestSignup = () => {
    return {
        type: SIGNUP_REQUEST
    };
};

const receiveSignup = user => {
    return {
        type: SIGNUP_SUCCESS,
        user
    };
};

const signupError = () => {
    return {
        type: SIGNUP_FAILURE
    }
}


// thunk for user login
export const signupUser = (email, password) => dispatch => {
    dispatch(requestSignup());
    myFirebase.auth().createUserWithEmailAndPassword(email, password)
    .then(user => {
        dispatch(receiveSignup(user));
    })
    .catch(error => {
        dispatch(signupError());
    })
}

