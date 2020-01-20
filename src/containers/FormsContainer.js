import React, { Component } from 'react'
import BoardForm from '../components/BoardForm.js'
import AlbumForm from '../components/AlbumForm.js'
import VideoForm from '../components/VideoForm.js'
import TVShowForm from '../components/TVShowForm.js'
import MovieForm from '../components/MovieForm.js'
import { url } from '../config'

export class FormsContainer extends Component {

    state = { movieForm: true, boardForm: true, albumForm: true, videoForm: true, tvForm: true }

    handleMovieSubmit = (movie) => {
        fetch(`${url}/movies`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: movie.name,
                month_day_watched: movie.monthWatched,
                year_watched: movie.yearWatched,
                notes: movie.notes,
                director: movie.director,
                year: movie.year,
                rating: movie.rating,
                image: movie.image
            })
        })
    }

    handleAlbumSubmit = (album) => {
        fetch(`${url}/albums`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: album.name,
                artist: album.artist,
                month_day_played: album.monthPlayed,
                year_played: album.yearPlayed,
                notes: album.notes,
                year: album.year,
                rating: album.rating,
                image: album.image
            })
        })
    }

    handleVideoSubmit = (video) => {
        fetch(`${url}/videos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: video.name,
                month_day_played: video.monthPlayed,
                year_played: video.yearPlayed,
                notes: video.notes,
                year: video.year,
                rating: video.rating,
                image: video.image
            })
        })
    }

    handleTVSubmit = (show) => {
        fetch(`${url}/tvshows`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: show.name,
                month_day_watched: show.monthWatched,
                year_watched: show.yearWatched,
                notes: show.notes,
                year: show.year,
                rating: show.rating,
                image: show.image,
                season: show.season
            })
        })
    }

    handleBoardSubmit = (board) => {
        fetch(`${url}/boards`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: board.name,
                month_day_played: board.monthPlayed,
                year_played: board.yearPlayed,
                notes: board.notes,
                year: board.year,
                rating: board.rating,
                image: board.image
            })
        })
    }

    closeMovieForm = () => {
        this.setState({ movieForm: !this.state.movieForm })
    }

    closeBoardForm = () => {
        this.setState({ boardForm: !this.state.boardForm })
    }

    closeAlbumForm = () => {
        this.setState({ albumForm: !this.state.albumForm })
    }

    closeVideoForm = () => {
        this.setState({ videoForm: !this.state.videoForm })
    }

    closeTVForm = () => {
        this.setState({ tvForm: !this.state.tvForm })
    }

    render() {
        return (
            <div className="mediaContainer">
                {this.state.movieForm ? <div><p onClick={() => this.setState({ movieForm: !this.state.movieForm })}>Open Movie Form</p></div> : <MovieForm handleMovieSubmit={this.handleMovieSubmit} closeMovieForm={this.closeMovieForm} />}
                {this.state.boardForm ? <div><p onClick={() => this.setState({ boardForm: !this.state.boardForm })}>Open Board Game Form</p></div> : <BoardForm handleBoardSubmit={this.handleBoardSubmit} closeBoardForm={this.closeBoardForm} />}
                {this.state.albumForm ? <div><p onClick={() => this.setState({ albumForm: !this.state.albumForm })}>Open Album Form</p></div> : <AlbumForm handleAlbumSubmit={this.handleAlbumSubmit} closeAlbumForm={this.closeAlbumForm} />}
                {this.state.videoForm ? <div><p onClick={() => this.setState({ videoForm: !this.state.videoForm })}>Open Video Game Form</p></div> : <VideoForm handleVideoSubmit={this.handleVideoSubmit} closeVideoForm={this.closeVideoForm} />}
                {this.state.tvForm ? <div><p onClick={() => this.setState({ tvForm: !this.state.tvForm })}>Open TV Show Form</p></div> : <TVShowForm handleTVSubmit={this.handleTVSubmit} closeTVForm={this.closeTVForm} />}
            </div>
        )
    }
}

export default FormsContainer
