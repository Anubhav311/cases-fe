import {FETCH_SKILLS, NEW_SKILL, NEW_SKILL_ERROR} from './types'
import axios from 'axios'
import { send } from 'q'

export const fetchSkills = () => dispatch => {
    axios.get('https://notes-app-be.herokuapp.com/api/skills')
        // .then(response => response.json())
        .then(skills => dispatch({
            type: FETCH_SKILLS,
            payload: skills.data
        }))
}

// export const createCase = (caseData) => (dispatch, getState, { getFirebase, getFirestore}) => {
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify(caseData)
//     })
//     .then(res => res.json())
//     .then(newCase => dispatch({
//         type: NEW_CASE,
//         payload: newCase
//     }))

//     // make async call to database
//     const firestore = getFirestore();
//     firestore.collection('users').add(...caseData)
//     .then(() => dispatch({
//         type: NEW_CASE,
//         payload: caseData
//     }))
//     .catch(err => dispatch({
//         type: NEW_CASE_ERROR, err
//     }))
// }