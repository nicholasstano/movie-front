import React, { Component } from 'react'

export class Movie extends Component {

    render() {

        var movies = this.props.movieReviews.map((movie => {
            return (
                <div key={movie.id}>
                    <h6>I watched {movie.name} ({movie.year}) directed by {movie.director} on {movie.date} with the following notes: {movie.notes}. I rate thee: {movie.rating}</h6>
                </div>
            )
        }))
        return (
            <div>
                {movies}
            </div>
        )
    }
}

export default Movie
