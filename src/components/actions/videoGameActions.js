import { GET_VIDEO_GAMES } from './types'
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