import { GET_TV_SHOWS } from '../actions/types'

const initialState = {
    tvShows: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_TV_SHOWS:
            return {
                ...state,
                tvShows: action.payload
            }
        default:
            return state
    }
}
