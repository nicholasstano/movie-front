import React from 'react'
import photos from '../../photos/favorites'

export default function TVShowHome() {
    let favoriteFive = photos.tvShows.map((tv, index) =>
        <div className="mediaFavoriteFiveSingle" key={tv}>
            <img src={tv} alt={tv} />
        </div>)
    return (
        <div className="mediaHome">
            <h1 className="mediaHeader font-weight-light">Favorite TV Shows</h1>
            <div className="mediaFavoriteFive">{favoriteFive}</div>
            <p>Committing to TV is challenging for me. I cannot say I have good taste or have explored shows that I know most poeple have seen. Gave up on Game of Thrones after Season 3.</p>
            <p>1) This is my kind of show. I could throw on any episode and be entertained by Colin, Ryan, Wayne and the host. This is all I need in a show.</p>
            <p>2) Grew up with the Simpsons and those first handful of seasons are excellent. Oddly enough the episodes I remember watching growing up come from seasons 11 and 12, which is where the show started going downhill.</p>
            <p>3) Props to Bret and Jemaine for bringing their collection of songs and humor to a show. The soundtrack is amazing and there are plenty of excellent one liners.</p>
            <p>4) Watched Parks and Rec in full once or twice. My type of humor and I first got into it because of Tom, but found myself enjoying Andy, April and Ben as I watched the show in full.</p>
            <p>5) I have put time into Entourage and certain things I enjoy when I rewatch it and other bits are cringeworthy. Kevin Dillon crushes it in every season. Everyone else is up and down throughout.</p>
        </div>
    )
}