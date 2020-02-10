import React, { Component } from 'react'
import AlbumForm from '../components/forms/AlbumForm.js'
import BoardForm from '../components/forms/BoardForm.js'
import BookForm from '../components/forms/BookForm.js'
import MovieForm from '../components/forms/MovieForm.js'
import TVShowForm from '../components/forms/TVShowForm.js'
import VideoForm from '../components/forms/VideoForm.js'
import { url } from '../config'

export class FormsContainer extends Component {

    state = {
        albumForm: false,
        boardForm: false,
        bookForm: false,
        movieForm: false,
        tvForm: false,
        videoForm: false,
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
                image: album.image,
                improve_notes: album.improveNotes
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
                image: board.image,
                improve_notes: board.improveNotes
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
                author: book.author,
                improve_notes: book.improveNotes
            })
        })
    }

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
                image: movie.image,
                improve_notes: movie.improveNotes
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
                season: show.season,
                improve_notes: show.improveNotes
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
                image: video.image,
                improve_notes: video.improveNotes
            })
        })
    }

    toggleAlbumForm = () => {
        this.setState({ albumForm: true, boardForm: false, bookForm: false, movieForm: false, tvForm: false, videoForm: false })
    }
    toggleBoardForm = () => {
        this.setState({ albumForm: false, boardForm: true, bookForm: false, movieForm: false, tvForm: false, videoForm: false })
    }
    toggleBookForm = () => {
        this.setState({ albumForm: false, boardForm: false, bookForm: true, movieForm: false, tvForm: false, videoForm: false })
    }
    toggleMovieForm = () => {
        this.setState({ albumForm: false, boardForm: false, bookForm: false, movieForm: true, tvForm: false, videoForm: false })
    }
    toggleTVForm = () => {
        this.setState({ albumForm: false, boardForm: false, bookForm: false, movieForm: false, tvForm: true, videoForm: false })
    }
    toggleVideoForm = () => {
        this.setState({ albumForm: false, boardForm: false, bookForm: false, movieForm: false, tvForm: false, videoForm: true })
    }

    render() {
        return (
            <div className="">
                <div className="formsSidebar">
                    <ul className="nav flex-column 
                    // navbar-dark bg-dark"
                    >
                        <li className="nav-item">
                            <button type="button" className="btn-sm btn-secondary" onClick={this.toggleAlbumForm}>Albums Form</button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn-sm btn-secondary" onClick={this.toggleBoardForm}>Board Games Form</button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn-sm btn-secondary" onClick={this.toggleBookForm}>Books Form</button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn-sm btn-secondary" onClick={this.toggleMovieForm}>Movies Form</button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn-sm btn-secondary" onClick={this.toggleTVForm}>TV Shows Form</button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn-sm btn-secondary" onClick={this.toggleVideoForm}>Video Games Form</button>
                        </li>
                    </ul>
                </div>
                <div className="formsContainer">
                    {this.state.albumForm ? <AlbumForm handleAlbumSubmit={this.handleAlbumSubmit} toggleAlbumForm={this.toggleAlbumForm} /> : null}
                    {this.state.boardForm ? <BoardForm handleBoardSubmit={this.handleBoardSubmit} toggleBoardForm={this.toggleBoardForm} /> : null}
                    {this.state.bookForm ? <BookForm handleBookSubmit={this.handleBookSubmit} toggleBookForm={this.toggleBookForm} /> : null}
                    {this.state.movieForm ? <MovieForm handleMovieSubmit={this.handleMovieSubmit} toggleMovieForm={this.toggleMovieForm} /> : null}
                    {this.state.tvForm ? <TVShowForm handleTVSubmit={this.handleTVSubmit} toggleTVForm={this.toggleTVForm} /> : null}
                    {this.state.videoForm ? <VideoForm handleVideoSubmit={this.handleVideoSubmit} toggleVideoForm={this.toggleVideoForm} /> : null}
                </div>
            </div>
        )
    }
}

export default FormsContainer