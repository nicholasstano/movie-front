import { GET_MOVIES, ADD_MOVIE } from './types'
import util from '../../util'
import { url } from '../../config'

export const getMovies = () => dispatch => {
    fetch(`${url}/movies`)
        .then(response => response.json())
        .then(movies => dispatch({
            type: GET_MOVIES,
            payload: util.sortMediaById(movies)
        }))
}

export const addMovie = (newMovie) => dispatch => {
    fetch(`${url}/movies`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(newMovie)
    })
        .then(res => res.json())
        .then(movie => dispatch({
            type: ADD_MOVIE,
            payload: movie
        }))
}