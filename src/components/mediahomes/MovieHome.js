import photos from '../../photos/favorites'
import HomeTemplate from './HomeTemplate'

export default function MovieHome() {

    const mediaNames = ["Pulp Fiction", "Taxi Driver", "Chinatown", "The Godfather", "The Usual Suspects"]

    const mediaIntro = "-----Rewatch Watchlist: \n -Seven Samurai \n -The Sound of Music \n -Return of the Jedi \n -Back to the Future Part III"

    return (
        HomeTemplate(mediaNames, photos.movies, "Movies", mediaIntro)
    )
}