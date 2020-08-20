import { GET_ALBUMS, ADD_ALBUM, EDIT_ALBUM, DELETE_ALBUM } from '../actions/types'

const initialState = {
    albums: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ALBUMS:
            return {
                ...state,
                albums: action.payload
            }
        case ADD_ALBUM:
            return {
                ...state,
                albums: [...state.albums, action.payload]
            }
        case EDIT_ALBUM:
            return {
                ...state,
                albums: [...state.albums.filter(album => album.id !== action.payload.id), action.payload]
            }
        case DELETE_ALBUM:
            return {
                ...state,
                albums: state.albums.filter(album => album.id !== action.payload)
            }
        default:
            return state
    }
}
