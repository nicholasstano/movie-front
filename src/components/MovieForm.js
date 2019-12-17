import React, { Component } from 'react'

export class MovieForm extends Component {

    state = {
        monthWatched: "",
        yearWatched: "",
        name: "",
        notes: "",
        year: "",
        director: "",
        rating: "",
        image: ""
    }

    handleMovieReviewChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleMovieReviewSubmit = event => {
        event.preventDefault()
        this.props.handleFormSubmit(this.state)
        this.setState({
            monthWatched: "",
            yearWatched: "",
            name: "",
            notes: "",
            year: "",
            director: "",
            rating: "",
            image: ""
        })
    }

    render() {
        return (
            <form onSubmit={this.handleMovieReviewSubmit}>
                <label>Month and Day Watched<input type="text" name="monthWatched" value={this.state.monthWatched} placeholder="12/31" onChange={this.handleMovieReviewChange} />
                </label>
                <label>Year Watched<input type="text" name="yearWatched" value={this.state.yearWatched} placeholder="1999" onChange={this.handleMovieReviewChange} />
                </label>
                <label>Name<input type="text" name="name" value={this.state.name} placeholder="Casablanca" onChange={this.handleMovieReviewChange} />
                </label>
                <label>Director<input type="text" name="director" value={this.state.director} placeholder="Michael Curtiz" onChange={this.handleMovieReviewChange} />
                </label>
                <label>Year<input type="text" name="year" value={this.state.year} placeholder="1942" onChange={this.handleMovieReviewChange} />
                </label>
                <label>Movie Poster<input type="text" name="image" value={this.state.image} placeholder="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/CasablancaPoster-Gold.jpg/440px-CasablancaPoster-Gold.jpg" onChange={this.handleMovieReviewChange} />
                </label>
                <label>Rating<input type="text" name="rating" value={this.state.rating} placeholder="5/5" onChange={this.handleMovieReviewChange} />
                </label>
                <label>Notes<textarea name="notes" value={this.state.notes} placeholder="(Un)worthy Movie Notes" onChange={this.handleMovieReviewChange} />
                </label>
                <button>Submit</button>
            </form>
        )
    }
}

export default MovieForm