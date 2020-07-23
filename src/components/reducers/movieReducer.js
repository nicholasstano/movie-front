import { GET_MOVIES, ADD_MOVIE } from '../actions/types'

const initialState = {
    movies: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_MOVIES:
            return {
                ...state,
                movies: action.payload
            }
        case ADD_MOVIE:
            return {
                ...state,
                movies: [state.movies, action.payload.movie]
            }
        default:
            return state
    }
}
