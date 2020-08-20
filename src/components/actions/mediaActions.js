import util from '../../util'
import { url } from '../../config'

export const getMedia = (mediaName, actionType) => dispatch => {
    fetch(`${url}/${mediaName}`)
        .then(response => response.json())
        .then(media => dispatch({
            type: actionType,
            payload: util.sortMediaById(media)
        }))
}

export const addMedia = (newMedia, mediaName, actionType) => dispatch => {
    fetch(`${url}/${mediaName}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(newMedia)
    })
        .then(res => res.json())
        .then(media => dispatch({
            type: actionType,
            payload: media
        }))
}

export const editMedia = (editedMedia, mediaName, actionType) => dispatch => {
    fetch(`${url}/${mediaName}/${editedMedia.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(editedMedia)
    })
        .then(res => res.json())
        .then(media => dispatch({
            type: actionType,
            payload: media
        }))
}

export const deleteMedia = (inputId, mediaName, actionType) => dispatch => {
    fetch(`${url}/${mediaName}/${inputId}`, {
        method: "DELETE",
    })
        .then(id => dispatch({
            type: actionType,
            payload: id
        }))
}