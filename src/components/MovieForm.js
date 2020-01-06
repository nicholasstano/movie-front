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
            <form className="mediaForm" onSubmit={this.handleMovieReviewSubmit}>
                <ul>
                    <input type="text" name="monthWatched" value={this.state.monthWatched} placeholder="Month/Day Watched (ex: 12/31)" onChange={this.handleMovieReviewChange} />
                </ul>
                <ul>
                    <input type="text" name="yearWatched" value={this.state.yearWatched} placeholder="Year Watched (ex: 2010)" onChange={this.handleMovieReviewChange} />
                </ul>
                <ul>
                    <input type="text" name="name" value={this.state.name} placeholder="Name (ex: Casablanca)" onChange={this.handleMovieReviewChange} />
                </ul>
                <ul>
                    <input type="text" name="director" value={this.state.director} placeholder="Director (ex: Michael Curtiz)" onChange={this.handleMovieReviewChange} />
                </ul>
                <ul>
                    <input type="text" name="year" value={this.state.year} placeholder="Year Released (ex: 1942)" onChange={this.handleMovieReviewChange} />
                </ul>
                <ul>
                    <input type="text" name="image" value={this.state.image} placeholder="Poster URL (ex: https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/CasablancaPoster-Gold.jpg/440px-CasablancaPoster-Gold.jpg)" onChange={this.handleMovieReviewChange} />
                </ul>
                <ul>
                    <input type="text" name="rating" value={this.state.rating} placeholder="Rating (ex: 5/5)" onChange={this.handleMovieReviewChange} />
                </ul>
                <ul>
                    <textarea name="notes" value={this.state.notes} placeholder="Movie Session Notes" onChange={this.handleMovieReviewChange} />
                </ul>
                <ul>
                    <button>Submit</button>
                </ul>
            </form>
        )
    }
}

export default MovieForm