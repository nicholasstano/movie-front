import photos from '../../photos/favorites'
import HomeTemplate from './HomeTemplate'

export default function MovieHome() {

    const mediaNames = ["Pulp Fiction", "Taxi Driver", "Chinatown", "The Godfather", "The Usual Suspects"]

    const mediaIntro = "1960's rewatch watchlist: Sanjuro, A Shot in the Dark, A Fistful of Dollars, Dr. Strangelove, For a Few Dollars More, The Sound of Music, The Good The Bad and The Ugly, Once Upon a Time in the West, Butch Cassidy and the Sundance Kid"

    return (
        HomeTemplate(mediaNames, photos.movies, "Movies", mediaIntro)
    )
}