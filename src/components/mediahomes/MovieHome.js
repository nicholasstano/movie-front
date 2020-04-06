import React from 'react'
import photos from '../../photos/favorites'

export default function MovieHome() {

    let mediaNames = ["Pulp Fiction", "Taxi Driver", "Chinatown", "The Godfather", "The Usual Suspects"]

    let favoriteFive = photos.movies.map((media, index) =>
        <div className="mediaFavoriteFiveSingle" key={media}>
            <h1>#{index + 1}</h1>
            <img src={media} alt={media} />
            <h4>{mediaNames[index]}</h4>
        </div>)
    return (
        <div className="mediaHome">
            <div>
                <h1 className="mediaHeader">Favorite Movies</h1>
                <p>1950's rewatch watchlist: In a Lonely Place, Strangers on a Train, Dial M for Murder, Rear Window, Seven Samurai, The Night of the Hunter, The Searchers, 12 Angry Men, Touch of Evil, Vertigo, North by Northwest</p>
            </div>
            {favoriteFive}
        </div>
    )
}
