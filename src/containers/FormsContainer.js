import React, { Component } from 'react'
import BoardForm from '../components/BoardForm.js'
import AlbumForm from '../components/AlbumForm.js'
import VideoForm from '../components/VideoForm.js'
import TVShowForm from '../components/TVShowForm.js'
import BookForm from '../components/BookForm.js'
import MovieForm from '../components/MovieForm.js'
import { url } from '../config'

export class FormsContainer extends Component {

    state = { movieForm: true, boardForm: true, albumForm: true, videoForm: true, tvForm: true, bookForm: true }

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

    handleBookSubmit = (book) => {
        fetch(`${url}/books`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: book.name,
                month_day_read: book.monthRead,
                year_read: book.yearRead,
                notes: book.notes,
                year: book.year,
                rating: book.rating,
                image: book.image,
                author: book.author
            })
        })
    }

    toggleMovieForm = () => {
        this.setState({ movieForm: !this.state.movieForm })
    }

    toggleBoardForm = () => {
        this.setState({ boardForm: !this.state.boardForm })
    }

    toggleAlbumForm = () => {
        this.setState({ albumForm: !this.state.albumForm })
    }

    toggleVideoForm = () => {
        this.setState({ videoForm: !this.state.videoForm })
    }

    toggleBookForm = () => {
        this.setState({ bookForm: !this.state.bookForm })
    }

    toggleTVForm = () => {
        this.setState({ tvForm: !this.state.tvForm })
    }

    render() {
        return (
            <div className="mediaContainer">
                {this.state.movieForm ? <div><p onClick={this.toggleMovieForm}>Open Movie Form</p></div> : <MovieForm handleMovieSubmit={this.handleMovieSubmit} toggleMovieForm={this.toggleMovieForm} />}
                {this.state.boardForm ? <div><p onClick={this.toggleBoardForm}>Open Board Game Form</p></div> : <BoardForm handleBoardSubmit={this.handleBoardSubmit} toggleBoardForm={this.toggleBoardForm} />}
                {this.state.albumForm ? <div><p onClick={this.toggleAlbumForm}>Open Album Form</p></div> : <AlbumForm handleAlbumSubmit={this.handleAlbumSubmit} toggleAlbumForm={this.toggleAlbumForm} />}
                {this.state.videoForm ? <div><p onClick={this.toggleVideoForm}>Open Video Game Form</p></div> : <VideoForm handleVideoSubmit={this.handleVideoSubmit} toggleVideoForm={this.toggleVideoForm} />}
                {this.state.bookForm ? <div><p onClick={this.toggleBookForm}>Open Book Form</p></div> : <BookForm handleBookSubmit={this.handleBookSubmit} toggleBookForm={this.toggleBookForm} />}                {this.state.tvForm ? <div><p onClick={this.toggleTVForm}>Open TV Show Form</p></div> : <TVShowForm handleTVSubmit={this.handleTVSubmit} toggleTVForm={this.toggleTVForm} />}
            </div>
        )
    }
}

export default FormsContainer