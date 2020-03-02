import TVShowHome from '../components/mediahomes/TVShowHome.js'
import TVShowSidebar from '../components/sidebars/TVShowSidebar.js'
import TVShowReviewCard from '../components/cards/TVShowReviewCard.js'
import React, { Component } from 'react'
import { url } from '../config'
import util from '../util'

export class TelevisionContainer extends Component {

    state = { tvReviews: [], media: null }

    componentDidMount() {
        fetch(`${url}/tvshows`)
            .then(response => response.json())
            .then(shows => {
                this.setState({
                    tvReviews: util.sortMediaById(shows)
                })
            })
    }

    mediaClickHandler = (mediaClicked) => {
        this.setState({ media: mediaClicked })
    }

    render() {
        return (
            <div className="mediaContainer font-weight-light">
                <div>
                    <TVShowSidebar tvReviews={this.state.tvReviews} mediaClickHandler={this.mediaClickHandler} />
                </div>
                <div className="container-fluid">
                    {this.state.media ? <TVShowReviewCard key={this.state.media.id} tvshow={this.state.media} /> : <TVShowHome />}
                </div>
            </div>
        )
    }
}

export default TelevisionContainer
