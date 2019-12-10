import React, { Component } from 'react'

export class MovieForm extends Component {

    state = {
        date: "",
        name: "",
        notes: "",
        year: "",
        director: "",
        rating: ""
    }

    handleMovieReviewChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleMovieReviewSubmit = event => {
        event.preventDefault()
        this.props.handleFormSubmit(this.state)
        this.setState({
            date: "",
            name: "",
            notes: "",
            year: "",
            director: "",
            rating: ""
        })
    }

    render() {
        return (
            <form onSubmit={this.handleMovieReviewSubmit}>
                <label>Date Watched<input type="text" name="date" value={this.state.date} placeholder="12/31/1999" onChange={this.handleMovieReviewChange} />
                </label>
                <label>Name<input type="text" name="name" value={this.state.name} placeholder="Casablanca" onChange={this.handleMovieReviewChange} />
                </label>
                <label>Director<input type="text" name="director" value={this.state.director} placeholder="Michael Curtiz" onChange={this.handleMovieReviewChange} />
                </label>
                <label>Year<input type="text" name="year" value={this.state.year} placeholder="1942" onChange={this.handleMovieReviewChange} />
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
