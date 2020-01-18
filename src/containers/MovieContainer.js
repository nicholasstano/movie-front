import React, { Component } from 'react'
import MovieReviewCard from '../components/MovieReviewCard.js'
import MovieReviewSearch from '../components/MovieReviewSearch.js'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import MovieForm from '../components/MovieForm.js'
import { url } from '../config'

export class MovieContainer extends Component {

    state = { movieSearch: "", movieReviews: [], option: "All years", selectedYear: [] }

    componentDidMount() {
        fetch(`${url}/movies`)
            .then(response => response.json())
            .then(movies => this.setState({ movieReviews: movies.reverse(), selectedYear: movies }));
    }

    addNewMovie = function (movie) {
        const newMovie = movie
        this.setState({
            movieReviews: [newMovie, ...this.state.movieReviews],
            selectedYear: [newMovie, ...this.state.selectedYear],
        })
    }

    handleFormSubmit = (movie) => {
        fetch(`${url}/movies`, {
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
        let filteredMovies = this.state.selectedYear.filter(movie => movie.name.toLowerCase().includes(this.state.movieSearch.toLowerCase()))
        return filteredMovies
    }

    changeYear = (event) => {
        let allMovies = this.state.movieReviews
        let yearsMovies = this.state.movieReviews.filter(movie => movie.year_watched === event.value)
        if (event.value === "All years") {
            this.setState({ selectedYear: allMovies, option: "All years" })
        }
        else if (event.value) {
            this.setState({ selectedYear: yearsMovies, option: event.value })
        }
    }

    render() {
        let years = this.state.movieReviews.map(movie => movie.year_watched)
        let uniqueYears = [...new Set(years)]
        let options = ["All years", ...uniqueYears]
        let movieReviews = this.filterMovies().map(movie => <MovieReviewCard key={movie.id} movie={movie} />)
        return (
            <div className="mediaContainer">
                <h1 className="mediaHeader">Spoilers for all movies below!</h1>
                <p>Around the end of 2019 TCM did a 4 films that define a decade starting with the 1920's. I'm going to go through my favorites from each decade. Currently in the 40's.</p>
                <MovieForm handleFormSubmit={this.handleFormSubmit} />
                <div className="mediaDropAndSearch">
                    <Dropdown className="mediaDropdown" options={options} onChange={this.changeYear} value={this.state.option} placeholder="Select an option" />
                    <MovieReviewSearch value={this.state.movieSearch} searchMovie={this.searchMovie} />
                </div>
                {movieReviews}
            </div >
        );
    }
}

export default MovieContainer