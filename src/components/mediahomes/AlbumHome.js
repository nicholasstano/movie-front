import React from 'react'
import photos from '../../photos/favorites'

export default function AlbumHome() {
    let favoriteFiveAlbums = photos.albums.map((album, index) =>
        <div className="mediaFavoriteFiveSingle" key={album}>
            <img src={album} alt={album} />
        </div>)
    return (
        <div className="mediaHome">
            <div className="mediaFavoriteFive">{favoriteFiveAlbums}</div>
            <p className="font-weight-light">Chris Jericho defines a perfect album as one where every song is an A or better. I believe a perfect album is an album that you throw on and have a desire to skip no tracks. I guess that's the same thing.</p>
            <p className="font-weight-light">1) Computerwelt by Kraftwerk has stood the test of time for me and it is not surprising they play plenty of songs from this album live. They're all memorable and many could be in my top 10 Kraftwerk songs of all time.</p>
            <p className="font-weight-light">2) Safe as Milk by Captain Beefheart is another favorite of mine. I had no clue what I was getting into the first time I heard it but I could not turn it off. It is odd and he has a unique voice that was nothing like what I had heard at the time. The music is stellar as well!</p>
            <p className="font-weight-light">3) Arthur by The Kinks is the album where I realized I didn't know what The Kinks actually sounded like. They had a string of five amazing albums or so and this is my favorite. Much better than their songs you hear on the radio. Side A has such an awesome blend of many different styles and they all land.</p>
            <p className="font-weight-light">4) The Lamb Lies Down on Broadway by Genesis takes me back to when I was only listening to progressive rock. This album does a great job of telling a story. At the same time it showcases Peter Gabriel's voice, and I think this guy can sing. Finally, the instrumentation of Hackett, Collins, Rutherford and Banks is top notch.</p>
            <p className="font-weight-light">5) Hot Rats by Frank Zappa is my favorite album by my favorite artist. I actually find that despite me enjoying his music, sometimes I prefer his live albums for the experience and continuity. That being said Hot Rats is an instrumental (almost) masterpiece with a few vocals from the Captain. Also contains my favorite FZ song of all time Son of Mr. Green Genes.</p>
        </div>
    )
}