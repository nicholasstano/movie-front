import { GET_TV_SHOWS, ADD_TV_SHOW } from '../actions/types'

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
        case ADD_TV_SHOW:
            return {
                ...state,
                tvShows: [state.tvShows, action.payload.tvShow]
            }
        default:
            return state
    }
}
