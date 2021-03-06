import { LOG_OUT } from './types'

export const setLogin = (type, userData) => dispatch => {
    return dispatch({
        type: type,
        payload: userData
    })
}

export const logout = () => dispatch => {
    localStorage.removeItem('token')
    return dispatch({
        type: LOG_OUT,
        payload: {}
    })
}