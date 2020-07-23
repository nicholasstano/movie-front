import { GET_BOARD_GAMES, ADD_BOARD_GAME } from '../actions/types'

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
        case ADD_BOARD_GAME:
            return {
                ...state,
                boardGames: [state.boardGames, action.payload.boardGame]
            }
        default:
            return state
    }
}
