import VideoGameHome from '../components/mediahomes/VideoGameHome.js'
import VideoGameSidebar from '../components/sidebars/VideoGameSidebar.js'
import VideoGameReviewCard from '../components/cards/VideoGameReviewCard.js'
import React, { Component } from 'react'
import { url } from '../config'
import util from '../util'

export class VideoContainer extends Component {

    state = { videoGameReviews: [], media: null }

    componentDidMount() {
        fetch(`${url}/videos`)
            .then(response => response.json())
            .then(videoGames => {
                this.setState({
                    videoGameReviews: util.sortMediaById(videoGames)
                })
            })
    }

    mediaClickHandler = (mediaClicked) => {
        window.scrollTo(0, 0)
        this.setState({ media: mediaClicked })
    }

    render() {
        return (
            <div className="mediaContainer">
                <div>
                    <VideoGameSidebar reviews={this.state.videoGameReviews} mediaClickHandler={this.mediaClickHandler} />
                </div>
                <div className="mediaContent">
                    {this.state.media ? <VideoGameReviewCard key={this.state.media.id} videoGame={this.state.media} /> : <VideoGameHome />}
                </div>
            </div>
        )
    }
}

export default VideoContainer
