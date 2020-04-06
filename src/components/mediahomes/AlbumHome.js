import React from 'react'
import photos from '../../photos/favorites'

export default function AlbumHome() {

    let mediaNames = ["Computerwelt by Kraftwerk", "Safe as Milk by Captain Beefheart", "Arthur by The Kinks", "The Lamb Lies Down on Broadway by Genesis", "Hot Rats by Frank Zappa"]

    let favoriteFive = photos.albums.map((media, index) =>
        <div className="mediaFavoriteFiveSingle" key={media}>
            <h1>#{index + 1}</h1>
            <img src={media} alt={media} />
            <h4>{mediaNames[index]}</h4>
        </div>)
    return (
        <div className="mediaHome">
            <div>
                <h1 className="mediaHeader">Favorite Albums</h1>
                <p>Chris Jericho defines a perfect album as one where every song is an A or better. I believe a perfect album is an album that you throw on and have a desire to skip no tracks. I guess that's the same thing.</p>
            </div>
            {favoriteFive}
        </div>
    )
}