import React, { Component } from 'react'
import MovieReviewCard from '../components/MovieReviewCard.js'
import MovieReviewSearch from '../components/MovieReviewSearch.js'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import MovieForm from '../components/MovieForm.js'

export class MovieContainer extends Component {

    state = { movieSearch: "", movieReviews: [], option: "All years", selectedYear: [] }

    componentDidMount() {
        fetch('http://localhost:3000/api/v1/movies')
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
        let filteredMovies = this.state.selectedYear.filter(movie => movie.name.toLowerCase().includes(this.state.movieSearch.toLowerCase()))
        return filteredMovies
    }

    changeYear = (event) => {
        let allMovies = this.state.movieReviews
        let yearsMovies = this.state.movieReviews.filter(movie => movie.year_watched === event.value)
        if (event.value === "All years") {
            this.setState({ selectedYear: allMovies })
        }
        else if (event.value) {
            this.setState({ selectedYear: yearsMovies })
        }
    }

    render() {
        let years = this.state.movieReviews.map(movie => movie.year_watched)
        let uniqueYears = [...new Set(years)]
        let options = ["All years", ...uniqueYears]
        let movieReviews = this.filterMovies().map(movie => <MovieReviewCard key={movie.id} movie={movie} />)
        return (
            <div className="mediaContainer">
                <h1 className="mediaHeader">Spoilers for all movie reviews below!</h1>
                <p>TCM is doing a 4 films that defined a decade. I had no movies from the 1920's that stood out for me. From the 1930's I recently rewatched my two favorites The Rules of the Game and M. I realized the 1940's has a lot of my favorite titles and it was so hard to narrow it down to 4. I plan to go through movies from the 1940's within the next few months. Then the 1950's and so on.</p>
                <Dropdown options={options} className="mediaDropdown" onChange={this.changeYear} value={this.state.option} placeholder="Select an option" />
                <MovieForm handleFormSubmit={this.handleFormSubmit} />
                <MovieReviewSearch value={this.state.movieSearch} searchMovie={this.searchMovie} />
                {movieReviews}
            </div >
        );
    }
}

export default MovieContainer