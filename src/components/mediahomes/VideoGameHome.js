import React from 'react'
import photos from '../../photos/favorites'

export default function VideoGameHome() {
    let favoriteFive = photos.tvShows.map((vg, index) =>
        <div className="mediaFavoriteFiveSingle" key={vg}>
            <img src={vg} alt={vg} />
        </div>)
    return (
        <div className="mediaHome">
            <h1 className="mediaHeader font-weight-light">Favorite Video Games</h1>
            <div className="mediaFavoriteFive">{favoriteFive}</div>
            <p>I enjoy a good story and fun play through preferably that can be done over the course of a few hours. I struggle with the grindy style game where my addictive personality has me playing too much. In general I prefer RTS genre though I've played very few of them, as well as a classic 2D side scroller.</p>
            <p>1) Favorite RTS game of all time because of the foodcap being 100. In Starcraft, the 200 just makes for some unnecessarily longer games. I also really enjoy the hero element that Warcraft 3 added to their RTS.</p>
            <p>2) 120 stars to collect as Mario running around the castle and jumping into portraits and tunnels? Love it. The world design is excellent and I love that in each level there are multiple stars to collect. Well done Nintendo!</p>
            <p>3) So many matchups between Roger, Kevin, Matt, Mike, Steve and whoever else was willing to get together for a round of pistols only with -10 health. An intense experience with a control that worked for this FPS.</p>
            <p>4) I found Baldur's Gate II when it came out and I got into Baldur's Gate too late. A great game with plenty of class options that all give the user a different experience. Also the fact that you can collect 5 other NPCs out of a long list of characters is exciting. Plenty of different combinations as I have barely scratched the surface. Story in BG is perfect and I love that the level cap is around 7 to 11. When you are double or triple that level in BGII all of the fights get a little too fast for my liking.</p>
            <p>5) Maybe because it was the first game I ever played but I love the original Sonic the Hedgehog. Yeah it is a simple game, but I can collect all the emeralds in 90 minutes and take down Robotnik? Let's go. Brilliant soundtrack, level design, and boss battles.</p>
        </div>
    )
}