import { combineReducers } from 'redux';
import albumReducer from './albumReducer'
import boardGameReducer from './boardGameReducer'

export default combineReducers({
    albums: albumReducer,
    boardGames: boardGameReducer
})