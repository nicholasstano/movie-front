import React, { Component } from 'react'

export class MovieContainer extends Component {

    render() {

        var movies = this.props.movieReviews.map((movie => {
            return (


                <div key={movie.id}>
                    <h6>I watched {movie.name} ({movie.year}) directed by {movie.director} on {movie.date} with the following notes: {movie.notes}. I rate thee: {movie.rating}</h6>
                    <img src={movie.image} alt={movie.name} />
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

export default MovieContainer
