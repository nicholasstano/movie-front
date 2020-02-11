import AlbumHome from '../components/mediahomes/AlbumHome.js'
import AlbumSidebar from '../components/sidebars/AlbumSidebar.js'
import AlbumReviewCard from '../components/cards/AlbumReviewCard.js'
import React, { Component } from 'react'
import { url } from '../config'

export class AlbumContainer extends Component {

    state = { albumReviews: [], option: "All years", album: null }

    componentDidMount() {
        fetch(`${url}/albums`)
            .then(response => response.json())
            .then(albums => {
                let sortedAlbums = []
                sortedAlbums = albums.sort(function (a, b) {
                    return b.id - a.id
                })
                this.setState({ albumReviews: sortedAlbums })
            });
    }

    albumClickHandler = (albumClicked) => {
        this.setState({ album: albumClicked })
    }

    render() {
        return (
            <div className="mediaContainer font-weight-light">
                <div>
                    <AlbumSidebar albumReviews={this.state.albumReviews} selectedYear={this.state.selectedYear} albumClickHandler={this.albumClickHandler} />
                </div>
                <div>
                    {this.state.album ? <AlbumReviewCard key={this.state.album.id} album={this.state.album} /> : <AlbumHome />}
                </div>
            </div>
        )
    }
}

export default AlbumContainer