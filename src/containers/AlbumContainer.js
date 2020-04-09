import AlbumHome from '../components/mediahomes/AlbumHome.js'
import AlbumSidebar from '../components/sidebars/AlbumSidebar.js'
import AlbumReviewCard from '../components/cards/AlbumReviewCard.js'
import React, { Component } from 'react'
import { url } from '../config'
import util from '../util'

export class AlbumContainer extends Component {

    state = { albumReviews: [], media: null }

    componentDidMount() {
        fetch(`${url}/albums`)
            .then(response => response.json())
            .then(albums => {
                this.setState({
                    albumReviews: util.sortMediaById(albums)
                })
            });
    }

    mediaClickHandler = (mediaClicked) => {
        window.scrollTo(0, 0)
        this.setState({ media: mediaClicked })
    }

    render() {
        return (
            <div className="mediaContainer">
                <div>
                    <AlbumSidebar albumReviews={this.state.albumReviews} mediaClickHandler={this.mediaClickHandler} />
                </div>
                <div>
                    {this.state.media ? <AlbumReviewCard key={this.state.media.id} album={this.state.media} /> : <AlbumHome />}
                </div>
            </div>
        )
    }
}

export default AlbumContainer