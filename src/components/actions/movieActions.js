import { GET_MOVIES } from './types'
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