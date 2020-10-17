import photos from '../../photos/favorites'
import HomeTemplate from './HomeTemplate'

export default function MovieHome() {

    const mediaNames = ["Pulp Fiction", "Taxi Driver", "Chinatown", "The Godfather", "The Usual Suspects"]

    const mediaIntro = "-----Rewatch Watchlist: \n -Star Wars \n -The Empire Strikes Back \n -Return of the Jedi \n -Raging Bull \n -The Shining \n -Scarface \n -Once Upon a Time in America \n -Die Hard"

    return (
        HomeTemplate(mediaNames, photos.movies, "Movies", mediaIntro)
    )
}