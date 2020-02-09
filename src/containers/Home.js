import React, { Component } from 'react'
import photos from '../photos/favorites'

export class Home extends Component {

    render() {
        return (
            <div className="mediaContainer">
                <p>Hello! My name is Nick and I enjoy revisiting media.</p>
                <div className="homeFavoriteSix">
                    <div className="homeFavoriteMedia"><img src={photos.albums[0]} alt="pulpfiction" /></div>
                    <div className="homeFavoriteMedia"><img src={photos.boardGames[0]} alt="pulpfiction" /></div>
                    <div className="homeFavoriteMedia"><img src={photos.books[0]} alt="pulpfiction" /></div>
                    <div className="homeFavoriteMedia"><img src={photos.movies[0]} alt="pulpfiction" /></div>
                    <div className="homeFavoriteMedia"><img src={photos.tvShows[1]} alt="pulpfiction" /></div>
                    <div className="homeFavoriteMedia"><img src={photos.videoGames[0]} alt="pulpfiction" /></div>
                </div>
            </div>
        )
    }
}

export default Home
