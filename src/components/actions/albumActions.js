import { GET_ALBUMS } from './types'
import util from '../../util'
import { url } from '../../config'

export const getAlbums = () => dispatch => {
    fetch(`${url}/albums`)
        .then(response => response.json())
        .then(albums => dispatch({
            type: GET_ALBUMS,
            payload: util.sortMediaById(albums)
        }))
}