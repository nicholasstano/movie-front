import React from 'react'
import photos from '../../photos/favorites'

export default function MovieHome() {
    let favoriteFive = photos.movies.map((movie, index) =>
        <div className="mediaFavoriteFiveSingle" key={movie}>
            <img src={movie} alt={movie} />
        </div>)
    return (
        <div className="mediaHome">
            <h1 className="mediaHeader font-weight-light">Favorite Movies</h1>
            <div className="mediaFavoriteFive">{favoriteFive}</div>
            <p>Currently going through a rewatch of my favorites from the 1940's. Current watchlist: Mildred Pierce, Double Indemnity, The Lost Weekend, Gilda, Out of the Past, White Heat, and The Treasure of the Sierra Madre.</p>
            <p>1) Love the dialogue in Pulp Fiction and the narrative structure. Samuel L Jackson as Jules is one of my favorite character performances of all time. Rewatched it a ton and find different pieces funny each time.</p>
            <p>2) Taxi Driver stands out to me for an excellent use of soundtrack. These saxophone pieces playing at the perfect times. The shots when he is driving around in the cab are well done. De Niro does an excellent job in his role as the awkward Travis Bickle.</p>
            <p>3) Chinatown ends on an awful note, which was different than the positive endings I was used to watching. Find myself rooting for JJ Gittes as the movie slowly unfolds. Jack Nicholson crushes it in his role and John Huston does an excellent job playing the most terrible person ever. My favorite genre of movie is noir and this is the best one.</p>
            <p>4) Godfather is the shortest 3 hour movie in my opinion. Paved the way for other gangster flicks and all of the actors deliver. What elevates this for me over part II is Brando. His performance is the best.</p>
            <p>5) I love a good twist ending and The Usual Suspects was that for me. After I watched this movie I went out and looked for other movies ending with crazy twists. Spoiler alert, none of them even come close to the brilliance of The Usual Suspects. Strong cast of characters and each time I watched I swear I have a new favorite character. At the moment it is McManus. Weird that Spacey won best supporting actor in this movie when he is clearly the lead.</p>
        </div>
    )
}