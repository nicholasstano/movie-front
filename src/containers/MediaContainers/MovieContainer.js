import MovieHome from '../../components/mediahomes/MovieHome.js'
import MovieSidebar from '../../components/sidebars/MovieSidebar.js'
import MovieReviewCard from '../../components/cards/MovieReviewCard.js'
import React, { Component } from 'react'
import { url } from '../../config'
import util from '../../util'
import './container.scss'

export class MovieContainer extends Component {

    state = { movieReviews: [], media: null }

    componentDidMount() {
        fetch(`${url}/movies`)
            .then(response => response.json())
            .then(movies => {
                this.setState({
                    movieReviews: util.sortMediaById(movies)
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
                    <MovieSidebar reviews={this.state.movieReviews} mediaClickHandler={this.mediaClickHandler} />
                </div>
                <div className="mediaContent">
                    {this.state.media ? <MovieReviewCard key={this.state.media.id} movie={this.state.media} /> : <MovieHome />}
                </div>
            </div>
        );
    }
}

export default MovieContainer