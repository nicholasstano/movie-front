import React from 'react'
import photos from '../../photos/favorites'

export default function TVShowHome() {

    let mediaNames = ["Whose Line Is It Anyway", "The Simpsons", "Flight of the Conchords", "Parks and Recreation", "Entourage"]

    let favoriteFive = photos.tvShows.map((media, index) =>
        <div className="mediaFavoriteFiveSingle" key={media}>
            <h1>#{index + 1}</h1>
            <img src={media} alt={media} />
            <h4>{mediaNames[index]}</h4>
        </div>)
    return (
        <div className="mediaHome">
            <div>
                <h1 className="mediaHeader">Favorite TV Shows</h1>
                <p>Committing to TV is challenging for me. I cannot say I have good taste or have explored shows that I know most poeple have seen. Gave up on Game of Thrones after Season 3.</p>
            </div>
            {favoriteFive}
        </div>
    )
}