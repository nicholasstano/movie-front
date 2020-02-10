import React, { Component } from 'react'
import MovieReviewCard from '../components/cards/MovieReviewCard.js'
import MediaSearch from '../components/MediaSearch.js'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { url } from '../config'
import util from '../util'
import photos from '../photos/favorites'

export class MovieContainer extends Component {

    state = { movieSearch: "", movieReviews: [], option: "All years", selectedYear: [] }

    componentDidMount() {
        fetch(`${url}/movies`)
            .then(response => response.json())
            .then(movies => this.setState({ movieReviews: movies.reverse(), selectedYear: movies }));
    }

    handleSearchTermChange = (search) => {
        this.setState({ movieSearch: search })
    }

    searchMovies = () => {
        return util.searchMedia(this.state.selectedYear, "name", this.state.movieSearch)
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
        let movieReviews = this.searchMovies().map(movie => <MovieReviewCard key={movie.id} movie={movie} />)
        let favoriteFiveMovies = photos.movies.map((movie, index) =>
            <div className="mediaFavoriteFiveSingle" key={movie}>
                <img src={movie} alt={movie} />
            </div>
        )
        return (
            <div className="mediaContainer">
                <h1 className="mediaHeader font-weight-light">Spoilers for all movies below!</h1>
                <div className="mediaFavoriteFive">{favoriteFiveMovies}</div>
                <p className="font-weight-light">WATCHLIST: Mildred Pierce, Double Indemnity, The Lost Weekend, Gilda, Brute Force, Out of the Past, White Heat, and The Treasure of the Sierra Madre.</p>
                <div className="mediaDropAndSearch">
                    <Dropdown className="mediaDropdown" options={options} onChange={this.changeYear} value={this.state.option} placeholder="Select an option" />
                    <MediaSearch value={this.state.movieSearch} onChange={this.handleSearchTermChange} mediaName={"Movies"} />
                </div>
                {movieReviews}
            </div >
        );
    }
}

export default MovieContainer