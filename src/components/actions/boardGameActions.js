import { GET_BOARD_GAMES, ADD_BOARD_GAME, EDIT_BOARD_GAME, DELETE_BOARD_GAME } from './types'
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

export const addBoardGame = (newBoardGame) => dispatch => {
    fetch(`${url}/boards`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(newBoardGame)
    })
        .then(res => res.json())
        .then(boardGame => dispatch({
            type: ADD_BOARD_GAME,
            payload: boardGame
        }))
}