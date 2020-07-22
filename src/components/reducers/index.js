import { combineReducers } from 'redux';
import albumReducer from './albumReducer'
import boardGameReducer from './boardGameReducer'
import bookReducer from './bookReducer'
import movieReducer from './movieReducer'
import tvShowReducer from './tvShowReducer'
import videoGameReducer from './videoGameReducer'

export default combineReducers({
    albums: albumReducer,
    boardGames: boardGameReducer,
    books: bookReducer,
    movies: movieReducer,
    tvShows: tvShowReducer,
    videoGames: videoGameReducer
})