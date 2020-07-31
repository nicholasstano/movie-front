import { GET_VIDEO_GAMES, ADD_VIDEO_GAME } from '../actions/types'

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
        case ADD_VIDEO_GAME:
            return {
                ...state,
                videoGames: [...state.videoGames, action.payload]
            }
        default:
            return state
    }
}
