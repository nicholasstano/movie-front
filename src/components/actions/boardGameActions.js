import { GET_BOARD_GAMES } from './types'
import util from '../../util'
import { url } from '../../config'

export const getBoardGames = () => dispatch => {
    fetch(`${url}/boards`)
        .then(response => response.json())
        .then(boardGames => dispatch({
            type: GET_BOARD_GAMES,
            payload: util.sortMediaById(boardGames)
        }))
}