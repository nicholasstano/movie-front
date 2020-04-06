import React from 'react'
import photos from '../../photos/favorites'

export default function BookHome() {

    let mediaNames = ["Harry Potter and the Order of the Phoenix", "Speaker for the Dead", "Harry Potter and the Chamber of Secrets", "Harry Potter and the Goblet of Fire", "Ender's Shadow"]

    let favoriteFive = photos.books.map((media, index) =>
        <div className="mediaFavoriteFiveSingle" key={media}>
            <h1>#{index + 1}</h1>
            <img src={media} alt={media} />
            <h4>{mediaNames[index]}</h4>
        </div>)
    return (
        <div className="mediaHome">
            <div>
                <h1 className="mediaHeader">Favorite Books</h1>
                <p>I have revisited the Harry Potter franchise too many times as well as the Enderverse. I know there are plenty of great titles out there that I haven't read.</p>
            </div>
            {favoriteFive}
        </div>
    )
}
