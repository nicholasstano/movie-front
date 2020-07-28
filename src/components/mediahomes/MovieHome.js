import photos from '../../photos/favorites'
import HomeTemplate from './HomeTemplate'

export default function MovieHome() {

    const mediaNames = ["Pulp Fiction", "Taxi Driver", "Chinatown", "The Godfather", "The Usual Suspects"]

    const mediaIntro = "1960's rewatch watchlist: \n -The Sound of Music \n 1970's rewatch watchlist: \n -The French Connection, \n -Mean Streets, \n -The Godfather: Part II, \n -Star Wars, \n -Halloween, \n -Alien"

    return (
        HomeTemplate(mediaNames, photos.movies, "Movies", mediaIntro)
    )
}