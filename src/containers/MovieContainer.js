import React, { Component } from 'react'

export class MovieContainer extends Component {

    render() {
        var movieReviews = this.props.movieReviews.map((movie => {
            return (
                <div className="movieReviews" key={movie.id}>
                    <div className="movieReviewsTop">
                        <p>Year Watched: {movie.year_watched}</p>
                        <p>Date Watched: {movie.month_day_watched}</p>
                        <p>Movie Name: {movie.name}</p>
                        <p>Director: {movie.director}</p>
                        <p>Year Released: {movie.year}</p>
                    </div>
                    <div className="movieReviewsPosterRatingNotes">
                        <img src={movie.image} alt={movie.name} />
                        <p>Rating: {movie.rating}</p>
                        <p>Notes: {movie.notes}</p>
                    </div>
                </div>
            )
        }))
        return (
            <div>
                {movieReviews}
            </div>
        );
    }
}

export default MovieContainer
