import React from 'react'
import photos from '../../photos/favorites'

export default function BoardGameHome() {

    let mediaNames = ["Terra Mystica", "Concordia", "Dominion", "Seven Wonders", "Power Grid"]

    let favoriteFive = photos.boardGames.map((media, index) =>
        <div className="mediaFavoriteFiveSingle" key={media}>
            <h1>#{index + 1}</h1>
            <img src={media} alt={media} />
            <h4>{mediaNames[index]}</h4>
        </div>)
    return (
        <div className="mediaHome">
            <div>
                <h1 className="mediaHeader">Favorite Board Games</h1>
                <p>Big thanks for Juho Snellman for his online implementation of Terra Mystica. Shoutouts to Matt, Tim, Frank, Paul, and Mike for continuing to entertain me by playing head to head contests.</p>
            </div>
            {favoriteFive}
        </div>
    )
}
