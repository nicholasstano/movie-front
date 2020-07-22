import React, { Component } from 'react'
import VideoGameHome from '../../components/mediahomes/VideoGameHome.js'
import VideoGameSidebar from '../../components/sidebars/VideoGameSidebar.js'
import VideoGameReviewCard from '../../components/cards/VideoGameReviewCard.js'
import { getVideoGames } from '../../components/actions/videoGameActions.js'
import { connect } from 'react-redux'
import './container.scss'

export class VideoContainer extends Component {

    state = { media: null }

    componentDidMount() {
        this.props.getVideoGames()
    }

    mediaClickHandler = (mediaClicked) => {
        window.scrollTo(0, 0)
        this.setState({ media: mediaClicked })
    }

    render() {
        const { videoGames } = this.props.videoGames
        const { media } = this.state
        return (
            <div className="mediaContainer">
                <div>
                    <VideoGameSidebar reviews={videoGames} mediaClickHandler={this.mediaClickHandler} />
                </div>
                <div className="mediaContent">
                    {media ? <VideoGameReviewCard key={media.id} videoGame={media} /> : <VideoGameHome />}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    videoGames: state.videoGames
})

export default connect(mapStateToProps, { getVideoGames })(VideoContainer)