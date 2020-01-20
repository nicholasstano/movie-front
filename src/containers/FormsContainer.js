import React, { Component } from 'react'
import BoardForm from '../components/BoardForm.js'
import AlbumForm from '../components/AlbumForm.js'
import VideoForm from '../components/VideoForm.js'
import TVShowForm from '../components/TVShowForm.js'
import MovieForm from '../components/MovieForm.js'
import { url } from '../config'

export class FormsContainer extends Component {

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

    render() {
        return (
            <div className="mediaContainer">
                <MovieForm handleMovieSubmit={this.handleMovieSubmit} />
                <BoardForm />
                <AlbumForm handleAlbumSubmit={this.handleAlbumSubmit} />
                <VideoForm handleVideoSubmit={this.handleVideoSubmit} />
                <TVShowForm handleTVSubmit={this.handleTVSubmit} />
            </div>
        )
    }
}

export default FormsContainer
