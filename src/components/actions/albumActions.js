import { GET_ALBUMS, ADD_ALBUM, EDIT_ALBUM, DELETE_ALBUM } from './types'
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

export const editAlbum = (editedAlbum) => dispatch => {
    fetch(`${url}/albums/${editedAlbum.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(editedAlbum)
    })
        .then(res => res.json())
        .then(album => dispatch({
            type: EDIT_ALBUM,
            payload: album
        }))
}

export const deleteAlbum = (inputId) => dispatch => {
    fetch(`${url}/albums/${inputId}`, {
        method: "DELETE",
    })
        .then(id => dispatch({
            type: DELETE_ALBUM,
            payload: id
        }))
}