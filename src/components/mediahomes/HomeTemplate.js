import React from 'react'
import './home.scss'

export default function HomeTemplate(topFiveMediaNames, photoName, title, paragraphInformation) {
    let favoriteFive = photoName.map((media, index) =>
        <div className="mediaFavoriteFiveSingle" key={media}>
            <p>{topFiveMediaNames[index]}</p>
            <img src={media} alt={media} />
        </div>)
    return (
        <div className="mediaHome">
            <div className="headerInfo">
                <h1 className="mediaHeader">Favorite {title}</h1>
                <p>{paragraphInformation}</p>
            </div>
            <div className="favoriteFive">
                {favoriteFive}
            </div>
        </div>
    )
}