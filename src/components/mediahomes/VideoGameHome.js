import React from 'react'
import photos from '../../photos/favorites'

export default function VideoGameHome() {

    let mediaNames = ["Warcraft III The Frozen Throne", "Super Mario 64", "GoldenEye 007", "Baldur's Gate", "Sonic the Hedgehog"]

    let favoriteFive = photos.videoGames.map((media, index) =>
        <div className="mediaFavoriteFiveSingle" key={media}>
            <h1>#{index + 1}</h1>
            <img src={media} alt={media} />
            <h4>{mediaNames[index]}</h4>
        </div>)
    return (
        <div className="mediaHome">
            <div>
                <h1 className="mediaHeader">Favorite TV Shows</h1>
                <p>I enjoy a good story and fun play through preferably that can be done over the course of a few hours. I struggle with the grindy style game where my addictive personality has me playing too much. In general I prefer RTS genre though I've played very few of them, as well as a classic 2D side scroller.</p>
            </div>
            {favoriteFive}
        </div>
    )
}