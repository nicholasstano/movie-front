import React from 'react'
import './home.css'

export default function HomeTemplate(topFiveMediaNames, photoName, title, paragraphInformation) {
    let favoriteFive = photoName.map((media, index) =>
        <div className="mediaFavoriteFiveSingle" key={media}>
            <h1>#{index + 1}</h1>
            <img src={media} alt={media} />
            <h4>{topFiveMediaNames[index]}</h4>
        </div>)
    return (
        <div className="mediaHome">
            <div>
                <h1 className="mediaHeader">Favorite {title}</h1>
                <p>{paragraphInformation}</p>
            </div>
            {favoriteFive}
        </div>
    )
}