import React from 'react'
import './mediaHome.scss'

export default function HomeTemplate(topFiveMediaNames, photoName, title, paragraphInformation) {
    let favoriteFive = photoName.map((media, index) =>
        <div className="mediaFavoriteFiveSingle" key={media}>
            <img src={media} alt={media} />
            <p>{topFiveMediaNames[index]}</p>
        </div>)
    let paragraph = paragraphInformation.split('\n').map(text =>
        <React.Fragment>
            {text}
            <br />
        </React.Fragment>
    )
    return (
        <div className="mediaHome">
            <div className="headerInfo">
                <h1 className="mediaHeader">Favorite {title}</h1>
                <p>{paragraph}</p>
            </div>
            <div className="favoriteFive">
                {favoriteFive}
            </div>
        </div>
    )
}