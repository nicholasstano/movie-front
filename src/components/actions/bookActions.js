import { GET_BOOKS, ADD_BOOK } from './types'
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

export const addBook = (newBook) => dispatch => {
    console.log(newBook)
    fetch(`${url}/books`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(newBook)
    })
        .then(res => res.json())
        .then(book => dispatch({
            type: ADD_BOOK,
            payload: book
        }))
}