import { GET_VIDEO_GAMES } from '../actions/types'

const initialState = {
    videoGames: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_VIDEO_GAMES:
            return {
                ...state,
                videoGames: action.payload
            }
        default:
            return state
    }
}
