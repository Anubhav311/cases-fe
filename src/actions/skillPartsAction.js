import {FETCH_PARTS, NEW_PART, NEW_PART_ERROR} from './types'
import axios from 'axios'

export const fetchParts = () => dispatch => {
    axios.get('https://notes-app-be.herokuapp.com/api/parts')
        .then(parts => dispatch({
            type: FETCH_PARTS,
            payload: parts.data
        }))
}
