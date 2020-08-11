import { USER_LOGIN } from '../actions/types'

const initialState = {
    user: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case USER_LOGIN:
            console.log('doesthiswork')
            return {
                user: action.payload
            }
        default:
            return state
    }
}