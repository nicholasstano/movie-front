import { USER_LOGIN, AUTO_LOGIN, LOG_OUT } from '../actions/types'

const initialState = {
    user: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case USER_LOGIN:
        case AUTO_LOGIN:
        case LOG_OUT:
            return {
                user: action.payload
            }
        default:
            return state
    }
}