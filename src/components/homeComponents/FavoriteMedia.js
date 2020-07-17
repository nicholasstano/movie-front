import React, { Component } from 'react'
import photos from '../../photos/favorites'
import './home.scss'

export class FavoriteMedia extends Component {
    state = { hoverAlbums: true, hoverBoardGames: true, hoverBooks: true, hoverMovies: true, hoverTVShows: true, hoverVideoGames: true }

    onMouseAlbumsEnterHandler = () => {
        this.setState({ hoverAlbums: false });
    }
    onMouseAlbumsLeaveHandler = () => {
        this.setState({ hoverAlbums: true });
    }
    onMouseBoardGamesEnterHandler = () => {
        this.setState({ hoverBoardGames: false });
    }
    onMouseBoardGamesLeaveHandler = () => {
        this.setState({ hoverBoardGames: true });
    }
    onMouseBooksEnterHandler = () => {
        this.setState({ hoverBooks: false });
    }
    onMouseBooksLeaveHandler = () => {
        this.setState({ hoverBooks: true });
    }
    onMouseMoviesEnterHandler = () => {
        this.setState({ hoverMovies: false });
    }
    onMouseMoviesLeaveHandler = () => {
        this.setState({ hoverMovies: true });
    }
    onMouseTVShowsEnterHandler = () => {
        this.setState({ hoverTVShows: false });
    }
    onMouseTVShowsLeaveHandler = () => {
        this.setState({ hoverTVShows: true });
    }
    onMouseVideoGamesEnterHandler = () => {
        this.setState({ hoverVideoGames: false });
    }
    onMouseVideoGamesLeaveHandler = () => {
        this.setState({ hoverVideoGames: true });
    }

    render() {
        return (
            <div>
                <div className="homeFavoriteSix">
                    {this.state.hoverAlbums ?
                        <div className="homeFavoriteMedia"><p>Computerwelt</p><img src={photos.albums[0]} alt="computerwelt" onMouseEnter={this.onMouseAlbumsEnterHandler} /></div>
                        :
                        <div className="homeFavoriteMediaHover font-italic"><p>Favorite Album</p><img src={photos.albums[0]} alt="computerwelt" onMouseLeave={this.onMouseAlbumsLeaveHandler} /></div>
                    }
                    {this.state.hoverBoardGames ?
                        <div className="homeFavoriteMedia"><p>Terra Mystica</p><img src={photos.boardGames[0]} alt="terramystica" onMouseEnter={this.onMouseBoardGamesEnterHandler} /></div>
                        :
                        <div className="homeFavoriteMediaHover font-italic"><p>Favorite Board Game</p><img src={photos.boardGames[0]} alt="terramystica" onMouseLeave={this.onMouseBoardGamesLeaveHandler} /></div>
                    }
                    {this.state.hoverBooks ?
                        <div className="homeFavoriteMedia"><p>Order of the Phoenix</p><img src={photos.books[0]} alt="orderofthephoenix" onMouseEnter={this.onMouseBooksEnterHandler} /></div>
                        :
                        <div className="homeFavoriteMediaHover font-italic"><p>Favorite Book</p><img src={photos.books[0]} alt="orderofthephoenix" onMouseLeave={this.onMouseBooksLeaveHandler} /></div>
                    }
                    {this.state.hoverMovies ?
                        <div className="homeFavoriteMedia"><p>Pulp Fiction</p><img src={photos.movies[0]} alt="pulpfiction" onMouseEnter={this.onMouseMoviesEnterHandler} /></div>
                        :
                        <div className="homeFavoriteMediaHover font-italic"><p>Favorite Movie</p><img src={photos.movies[0]} alt="pulpfiction" onMouseLeave={this.onMouseMoviesLeaveHandler} /></div>
                    }
                    {this.state.hoverTVShows ?
                        <div className="homeFavoriteMedia"><p>Whose Line Is It Anyway?</p><img src={photos.tvShows[0]} alt="whoseline" onMouseEnter={this.onMouseTVShowsEnterHandler} /></div>
                        :
                        <div className="homeFavoriteMediaHover font-italic"><p>Favorite TV Show</p><img src={photos.tvShows[0]} alt="whoseline" onMouseLeave={this.onMouseTVShowsLeaveHandler} /></div>
                    }
                    {this.state.hoverVideoGames ?
                        <div className="homeFavoriteMedia"><p>Warcraft 3: The Frozen Throne</p><img src={photos.videoGames[0]} alt="warcraft3tft" onMouseEnter={this.onMouseVideoGamesEnterHandler} /></div>
                        :
                        <div className="homeFavoriteMediaHover font-italic"><p>Favorite Video Game</p><img src={photos.videoGames[0]} alt="warcraft3tft" onMouseLeave={this.onMouseVideoGamesLeaveHandler} /></div>
                    }
                </div>

            </div>
        )
    }
}

export default FavoriteMedia