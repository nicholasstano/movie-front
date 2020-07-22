import { GET_ALBUMS, ADD_ALBUM } from './types'
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

export const addAlbum = (newAlbum) => dispatch => {
    fetch(`${url}/albums`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(newAlbum)
    })
        .then(res => res.json())
        .then(album => dispatch({
            type: ADD_ALBUM,
            payload: album
        }))
}