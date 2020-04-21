import React, { useEffect } from 'react'
import { url } from '../config'
import util from '../util'

const MediaContainerTemplate = () => {
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

    return (
        <div className="mediaContainer">
            <div>
                <AlbumSidebar reviews={this.state.albumReviews} mediaClickHandler={mediaClickHandler} />
            </div>
            <div className="mediaContent">
                {this.state.media ? <AlbumReviewCard key={this.state.media.id} album={this.state.media} /> : <AlbumHome />}
            </div>
        </div>
    )
}


export default MediaContainerTemplate
