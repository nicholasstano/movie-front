import { USER_LOGIN, AUTO_LOGIN } from './types'

export const setUserLogin = (userData) => dispatch => {
    console.log("UD", userData)
    return {
        type: USER_LOGIN,
        payload: userData
    }
}