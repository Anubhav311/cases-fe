import {FETCH_PARTS, NEW_PART, NEW_PART_ERROR, UPDATE_PART_TITLE} from '../actions/types'

const initState = {
    parts: [],
    newPart: {
        title: '',
        body: ''
    }
}

export default function(state = initState, action) {
    switch(action.type) {
        case UPDATE_PART_TITLE:
            return {
                ...state,
                parts: action.payload
            }
        case FETCH_PARTS:
            return {
                ...state,
                parts: action.payload,
            }
        case NEW_PART:
            return {
                ...state,
                parts: action.payload
            }
        case NEW_PART_ERROR:
            return state
        default:
            return state;
    }
}