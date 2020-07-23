import { GET_VIDEO_GAMES, ADD_VIDEO_GAME } from './types'
import util from '../../util'
import { url } from '../../config'

export const getVideoGames = () => dispatch => {
    fetch(`${url}/videos`)
        .then(response => response.json())
        .then(videoGame => dispatch({
            type: GET_VIDEO_GAMES,
            payload: util.sortMediaById(videoGame)
        }))
}

export const addVideoGame = (newGame) => dispatch => {
    fetch(`${url}/videos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(newGame)
    })
        .then(res => res.json())
        .then(videoGame => dispatch({
            type: ADD_VIDEO_GAME,
            payload: videoGame
        }))
}