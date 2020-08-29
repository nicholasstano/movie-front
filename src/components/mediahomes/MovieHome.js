import photos from '../../photos/favorites'
import HomeTemplate from './HomeTemplate'

export default function MovieHome() {

    const mediaNames = ["Pulp Fiction", "Taxi Driver", "Chinatown", "The Godfather", "The Usual Suspects"]

    const mediaIntro = "1960's rewatch watchlist: \n -The Sound of Music \n 1970's rewatch watchlist: \n -Star Wars \n 1980's rewatch watchlist: \n -The Empire Strikes Back \n -Return of the Jedi \n -Caddyshack \n -Raging Bull \n -The Shining \n -The Road Warrior \n -Raiders of the Lost Ark \n -Blade Runner \n -Scarface \n -Once Upon a Time in America \n -The Terminator \n -Back to the Future \n -Ran \n -Aliens \n -Big Trouble in Little China \n -Blue Velvet \n -Die Hard \n -Back to the Future Part II"

    return (
        HomeTemplate(mediaNames, photos.movies, "Movies", mediaIntro)
    )
}