import { GET_TV_SHOWS, ADD_TV_SHOW } from './types'
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

export const addTVShow = (newShow) => dispatch => {
    fetch(`${url}/tvshows`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(newShow)
    })
        .then(res => res.json())
        .then(tvShow => dispatch({
            type: ADD_TV_SHOW,
            payload: tvShow
        }))
}