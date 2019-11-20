import {FETCH_PARTS, NEW_PART, NEW_PART_ERROR} from '../actions/types'

const initState = {
    parts: [],
    newPart: {
        title: '',
        body: ''
    }
}

export default function(state = initState, action) {
    switch(action.type) {
        case FETCH_PARTS:
            return {
                ...state,
                items: action.payload,
            }
        case NEW_PART:
            return {
                ...state,
                item: action.payload
            }
        case NEW_PART_ERROR:
            return state
        default:
            return state;
    }
}