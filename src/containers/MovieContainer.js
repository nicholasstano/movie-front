import React, { Component } from 'react'
import MovieReviewCard from '../components/MovieReviewCard.js'
import MovieReviewSearch from '../components/MovieReviewSearch.js'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { url } from '../config'

export class MovieContainer extends Component {

    state = { movieSearch: "", movieReviews: [], option: "All years", selectedYear: [] }

    componentDidMount() {
        fetch(`${url}/movies`)
            .then(response => response.json())
            .then(movies => this.setState({ movieReviews: movies.reverse(), selectedYear: movies }));
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
                <p>Going through movies from the 1940's. On my watchlist: Mildred Pierce, Double Indemnity, Laura, The Lost Weekend, Gilda, The Killers, Brute Force, Out of the Past, The Big Clock, White Heat, and The Treasure of the Sierra Madre.</p>
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