import React from 'react'
import photos from '../../photos/favorites'

export default function BoardGameHome() {
    let favoriteFive = photos.boardGames.map((bg, index) =>
        <div className="mediaFavoriteFiveSingle" key={bg}>
            <img src={bg} alt={bg} />
        </div>)
    return (
        <div>
            <div className="mediaHome">
                <h1 className="mediaHeader font-weight-light">Favorite Board Games</h1>
                <div className="mediaFavoriteFive">{favoriteFive}</div>
                <p>Big thanks for Juho Snellman for his online implementation of Terra Mystica. Shoutouts to Matt, Tim, Frank, Paul, and Mike for continuing to entertain me by playing head to head contests.</p>
                <p>1) Terra Mystica continues to take the number one spot. Have played over 400 matches online thanks to having great friends who love it as much as I do. The 2020 expansion for the game I am really looking forward to. It seems to balance the game in a way that will make it more replayable.</p>
                <p>2) Concordia is a perfect friendly game where no do not know who is winning until the end. Many different stratagies as there are plenty of unique ways to score points. Fun map selection as well.</p>
                <p>3) Dominion has gotten to a point where there are probably too many cards but I'm all in for it. I continue to buy each expansion and would play 1v1, 1v1v1, or 1v1v1v1 anytime you want!</p>
                <p>4) Seven Wonders is the game that for me made me realize what else was out there. I think whatever level of expertise you have in games you will find yourself addicted to the easy, laid back, fun nature of the game.</p>
                <p>5) Power Grid has a lot of cool elements and I am still looking for my first win. Definitely a game that feels like I always need one more turn to win and then someone ends the game and beats me.</p>
            </div>
        </div>
    )
}
