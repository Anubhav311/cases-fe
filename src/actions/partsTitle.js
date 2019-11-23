import { UPDATE_PART_TITLE } from './types'
import axios from 'axios'


export const updatePartTitle = payload => dispatch => {
    dispatch({
        type: UPDATE_PART_TITLE,
        payload: payload
    })
}
