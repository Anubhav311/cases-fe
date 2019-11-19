import {FETCH_CASES, NEW_CASE, NEW_CASE_ERROR} from './types'
import axios from 'axios'

export const fetchCases = () => dispatch => {
    axios.get('https://notes-app-be.herokuapp.com/api/items')
        .then(response => console.log(response))
        .then(cases => dispatch({
            type: FETCH_CASES,
            payload: cases
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