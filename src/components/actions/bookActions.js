import { GET_BOOKS, ADD_BOOK, EDIT_BOOK, DELETE_BOOK } from './types'
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

export const editBook = (editedBook) => dispatch => {
    fetch(`${url}/books/${editedBook.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(editedBook)
    })
        .then(res => res.json())
        .then(book => dispatch({
            type: EDIT_BOOK,
            payload: book
        }))
}

export const deleteBook = (inputId) => dispatch => {
    fetch(`${url}/books/${inputId}`, {
        method: "DELETE",
    })
        .then(id => dispatch({
            type: DELETE_BOOK,
            payload: id
        }))
}