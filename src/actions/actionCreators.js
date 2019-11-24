import { UPDATE_PART_TITLE, FETCH_PARTS, FETCH_SKILLS, UPDATE_PART_COMPLETION_STATUS, DELETE_PART } from './actionTypes'
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


export const deletePart = id => dispatch => {
    axios.delete('https://notes-app-be.herokuapp.com/api/parts', id)
        .then(response => console.log(response)
            // console.log('worked', id)
            // return dispatch({
            //     type: DELETE_PART,
            //     payload: payload
            // })
        )
        .catch(err => {
            console.log(err.message)
        })
}
