import { GET_BOOKS } from './types'
import util from '../../util'
import { url } from '../../config'

export const getBooks = () => dispatch => {
    fetch(`${url}/books`)
        .then(response => response.json())
        .then(books => dispatch({
            type: GET_BOOKS,
            payload: util.sortMediaById(books)
        }))
}