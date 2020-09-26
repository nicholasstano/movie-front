import photos from '../../photos/favorites'
import HomeTemplate from './HomeTemplate'

export default function MovieHome() {

    const mediaNames = ["Pulp Fiction", "Taxi Driver", "Chinatown", "The Godfather", "The Usual Suspects"]

    const mediaIntro = "-----1970's rewatch watchlist: \n -Star Wars \n -----1980's rewatch watchlist: \n -The Empire Strikes Back \n -Return of the Jedi \n -Raging Bull \n -The Shining \n -The Road Warrior \n -Blade Runner \n -Scarface \n -Once Upon a Time in America \n -Ran \n -Big Trouble in Little China \n -Blue Velvet \n -Die Hard"

    return (
        HomeTemplate(mediaNames, photos.movies, "Movies", mediaIntro)
    )
}