import React, { Component } from 'react'
import MovieReviewCard from '../components/MovieReviewCard.js'
import MovieReviewSearch from '../components/MovieReviewSearch.js'
import MovieForm from '../components/MovieForm.js'

export class MovieContainer extends Component {

    state = { movieSearch: "", movieReviews: [] }

    componentDidMount() {
        if (this.state) {
            fetch('http://localhost:3000/api/v1/movies')
                .then(response => response.json())
                .then(movies => this.setState({ movieReviews: movies.reverse() }));
        }
    }

    addNewMovie = function (movie) {
        const newMovie = movie
        this.setState({
            movieReviews: [newMovie, ...this.state.movieReviews],
        })
    }

    handleFormSubmit = (movie) => {
        fetch('http://localhost:3000/api/v1/movies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: movie.name,
                month_day_watched: movie.monthWatched,
                year_watched: movie.yearWatched,
                notes: movie.notes,
                director: movie.director,
                year: movie.year,
                rating: movie.rating,
                image: movie.image
            })
        }).then(response => response.json())
            .then(movie => this.addNewMovie(movie)
            )
    }

    searchMovie = (search) => {
        this.setState({ movieSearch: search })
    }

    filterMovies = () => {
        let filteredMovies = this.state.movieReviews.filter(movie => movie.name.toLowerCase().includes(this.state.movieSearch.toLowerCase()))
        return filteredMovies
    }

    render() {
        let movieReviews = this.filterMovies().map(movie => <MovieReviewCard key={movie.id} movie={movie} />)
        return (
            <div className="movieReviewContainer">
                <MovieForm handleFormSubmit={this.handleFormSubmit} />
                <MovieReviewSearch value={this.state.movieSearch} searchMovie={this.searchMovie} />
                {movieReviews}
            </div >
        );
    }
}

export default MovieContainer
