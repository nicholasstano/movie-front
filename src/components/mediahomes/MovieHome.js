import photos from '../../photos/favorites'
import HomeTemplate from './HomeTemplate'

export default function MovieHome() {

    const mediaNames = ["Pulp Fiction", "Taxi Driver", "Chinatown", "The Godfather", "The Usual Suspects"]

    const mediaIntro = "1960's rewatch watchlist: The Sound of Music, Once Upon a Time in the West, Butch Cassidy and the Sundance Kid. \n 1970's rewatch watchlist: Willy Wonka & The Chocolate Factory, The French Connection, The Godfather, Mean Streets, The Sting, Chinatown, The Godfather: Part II, Young Frankenstein, One Flew Over the Cuckoo's Nest, Jaws, Taxi Driver, Star Wars, Halloween, Alien \n 1980's rewatch next"

    return (
        HomeTemplate(mediaNames, photos.movies, "Movies", mediaIntro)
    )
}