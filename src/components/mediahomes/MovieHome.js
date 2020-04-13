import photos from '../../photos/favorites'
import HomeTemplate from './HomeTemplate'

export default function MovieHome() {

    const mediaNames = ["Pulp Fiction", "Taxi Driver", "Chinatown", "The Godfather", "The Usual Suspects"]

    const mediaIntro = "1950's rewatch watchlist: In a Lonely Place, Strangers on a Train, Dial M for Murder, Rear Window, Seven Samurai, The Night of the Hunter, The Searchers, Touch of Evil, Vertigo, North by Northwest"

    return (
        HomeTemplate(mediaNames, photos.movies, "Movies", mediaIntro)
    )
}