import React from 'react'
import './mediaHome.scss'

export default function HomeTemplate(topFiveMediaNames, photoName, title, paragraphInformation) {
    let favoriteFive = photoName.map((media, index) =>
        <div className="mediaFavoriteFiveSingle" key={media}>
            <h2>{1 + index} {topFiveMediaNames[index]}</h2>
            <img src={media} alt={media} />
        </div>)
    let paragraph = paragraphInformation.split('\n').map((text, i) =>
        <React.Fragment key={i}>
            {text}
            <br />
        </React.Fragment>
    )

    return (
        <div className="mediaHome">
            <div className="headerInfo">
                <h5 className="mediaHeader">Favorite {title}</h5>
                <p>{paragraph}</p>
            </div>
            <div className="favoriteFive">
                {favoriteFive}
            </div>
        </div>
    )
}