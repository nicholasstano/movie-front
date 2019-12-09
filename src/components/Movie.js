import React, { Component } from 'react'

export class Movie extends Component {

    render() {

        var movies = this.props.movieReviews.map((movie => {
            return (
                <div key={movie.id}>
                    <h1>{movie.name}</h1>
                    <p>{movie.notes}</p>
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
