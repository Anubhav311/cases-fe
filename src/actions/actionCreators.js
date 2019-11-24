import { UPDATE_PART_TITLE, FETCH_PARTS, FETCH_SKILLS, UPDATE_PART_COMPLETION_STATUS } from './actionTypes'
import axios from 'axios'


export const updatePartTitle = payload => dispatch => {
    dispatch({
        type: UPDATE_PART_TITLE,
        payload: payload
    })
}


export const fetchParts = () => dispatch => {
    axios.get('https://notes-app-be.herokuapp.com/api/parts')
        .then(parts => dispatch({
            type: FETCH_PARTS,
            payload: parts.data
        }))
}


export const fetchSkills = () => dispatch => {
    axios.get('https://notes-app-be.herokuapp.com/api/skills')
        // .then(response => response.json())
        .then(skills => dispatch({
            type: FETCH_SKILLS,
            payload: skills.data
        }))
}


export const updatePartCompletionStatus = payload => dispatch => {
    dispatch({
        type: UPDATE_PART_COMPLETION_STATUS,
        payload: payload
    })
}
