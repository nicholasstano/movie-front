import React, { Component } from 'react'
import TVShowHome from '../../components/mediahomes/TVShowHome.js'
import TVShowSidebar from '../../components/sidebars/TVShowSidebar.js'
import TVShowReviewCard from '../../components/cards/TVShowReviewCard.js'
import { getTVShows } from '../../components/actions/tvShowActions.js'
import { connect } from 'react-redux'
import './container.scss'

export class TelevisionContainer extends Component {

    state = { media: null }

    componentDidMount() {
        this.props.getTVShows()
    }

    mediaClickHandler = (mediaClicked) => {
        window.scrollTo(0, 0)
        this.setState({ media: mediaClicked })
    }

    render() {
        const { tvShows } = this.props.tvShows
        const { media } = this.state
        return (
            <div className="mediaContainer">
                <div>
                    <TVShowSidebar reviews={tvShows} mediaClickHandler={this.mediaClickHandler} />
                </div>
                <div className="mediaContent">
                    {media ? <TVShowReviewCard key={media.id} tvshow={media} /> : <TVShowHome />}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    tvShows: state.tvShows
})

export default connect(mapStateToProps, { getTVShows })(TelevisionContainer)