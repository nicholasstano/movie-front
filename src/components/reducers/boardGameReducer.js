import { GET_BOARD_GAMES } from '../actions/types'

const initialState = {
    boardGames: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_BOARD_GAMES:
            return {
                ...state,
                boardGames: action.payload
            }
        default:
            return state
    }
}
