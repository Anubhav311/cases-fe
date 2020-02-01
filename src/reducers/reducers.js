import {
    FETCH_SKILLS, 
    NEW_SKILL, 
    NEW_SKILL_ERROR,
    FETCH_PARTS, 
    NEW_PART, 
    NEW_PART_ERROR, 
    UPDATE_PART_TITLE,
    UPDATE_PART_COMPLETION_STATUS,
    DELETE_PART
} from '../actions/actionTypes'


export function skillsReducer(
    state = {
        skills: [],
        newSkill: {
            title: '',
            body: ''
        }
    }, action
    ) {
    switch(action.type) {
        case FETCH_SKILLS:
            return {
                ...state,
                skills: action.payload,
            }
        case NEW_SKILL:
            return {
                ...state,
                item: action.payload
            }
        case NEW_SKILL_ERROR:
            return state
        default:
            return state;
    }
}


export function partsReducer(
    state = {
        parts: [],
        newPart: {
            title: '',
            body: ''
        }
    }, action
    ) {
    switch(action.type) {
        case DELETE_PART:
            return {
                ...state,
                parts: action.payload
            }
        case UPDATE_PART_COMPLETION_STATUS:
            return {
                ...state,
                parts: action.payload
            }
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