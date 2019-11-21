import {FETCH_SKILLS, NEW_SKILL, NEW_SKILL_ERROR} from '../actions/types'

const initState = {
    skills: [],
    newSkill: {
        title: '',
        body: ''
    }
}

export default function(state = initState, action) {
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