import { GET_BOOKS, ADD_BOOK, EDIT_BOOK } from '../actions/types'

const initialState = {
    books: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_BOOKS:
            return {
                ...state,
                books: action.payload
            }
        case ADD_BOOK:
            return {
                ...state,
                books: [...state.books, action.payload]
            }
        case EDIT_BOOK:
            return {
                ...state,
                books: [...state.books.filter(book => book.id !== action.payload.id), action.payload]
            }
        default:
            return state
    }
}
