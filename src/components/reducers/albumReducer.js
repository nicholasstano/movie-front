import { GET_ALBUMS } from '../actions/types'

const initialState = {
    albums: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ALBUMS:
            return {
                ...state,
                albums: action.payload
            }
        // case ADD_SONG:
        //     return {
        //         ...state,
        //         songs: [...state.songs, action.payload.song]
        //     }
        default:
            return state
    }
}
