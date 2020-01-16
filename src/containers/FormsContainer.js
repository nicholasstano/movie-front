import React, { Component } from 'react'
import BoardForm from '../components/BoardForm.js'
import AlbumForm from '../components/AlbumForm.js'
import VideoForm from '../components/VideoForm.js'
import { url } from '../global/GlobalVariables.js'

export class FormsContainer extends Component {

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

    render() {
        return (
            <div className="mediaContainer">
                <BoardForm />
                <AlbumForm handleAlbumSubmit={this.handleAlbumSubmit} />
                <VideoForm handleVideoSubmit={this.handleVideoSubmit} />
            </div>
        )
    }
}

export default FormsContainer
