import React, { Component } from 'react'
import { connect } from 'react-redux'
import MovieHome from '../../components/mediahomes/MovieHome.js'
import MovieSidebar from '../../components/sidebars/MovieSidebar.js'
import MovieReviewCard from '../../components/cards/MovieReviewCard.js'
import { getMedia } from '../../components/actions/mediaActions.js'
import { GET_MOVIES } from '../../components/actions/types'
import './container.scss'

export class MovieContainer extends Component {

    state = { media: null }

    componentDidMount() {
        this.props.getMedia("movies", GET_MOVIES)
    }

    mediaClickHandler = (mediaClicked) => {
        window.scrollTo(0, 0)
        this.setState({ media: mediaClicked })
    }

    render() {
        const { movies } = this.props.movies
        const { media } = this.state
        return (
            <div className="mediaContainer">
                <div>
                    <MovieSidebar reviews={movies} mediaClickHandler={this.mediaClickHandler} />
                </div>
                <div className="mediaContent">
                    {media ? <MovieReviewCard key={media.id} movie={media} /> : <MovieHome />}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    movies: state.movies
})

export default connect(mapStateToProps, { getMedia })(MovieContainer)