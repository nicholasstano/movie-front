import React, { Component } from 'react'
import MovieReviewCard from '../components/MovieReviewCard.js'

export class MovieContainer extends Component {

    render() {
        let movieReviews = this.props.movieReviews.map(movie => <MovieReviewCard key={movie.id} movie={movie} />)
        return (
            <div>
                {/* {this.props.movieReviews.length > 0 ? movieReviews : <h1>loading</h1>} */}
                {movieReviews}
            </div >
        );
    }
}

export default MovieContainer
