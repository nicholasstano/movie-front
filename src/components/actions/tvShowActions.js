import { GET_TV_SHOWS } from './types'
import util from '../../util'
import { url } from '../../config'

export const getTVShows = () => dispatch => {
    fetch(`${url}/tvshows`)
        .then(response => response.json())
        .then(tvshows => dispatch({
            type: GET_TV_SHOWS,
            payload: util.sortMediaById(tvshows)
        }))
}