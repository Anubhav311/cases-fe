import {FETCH_CASES, NEW_CASE, NEW_CASE_ERROR} from '../actions/types'

const initState = {
    cases: [],
    newCase: {
        title: '',
        body: ''
    }
}

export default function(state = initState, action) {
    switch(action.type) {
        case FETCH_CASES:
            return {
                ...state,
                cases: action.payload,
            }
        case NEW_CASE:
            return {
                ...state,
                cases: action.payload
            }
        case NEW_CASE_ERROR:
            return state
        default:
            return state;
    }
}