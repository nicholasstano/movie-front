import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addMedia } from '../../actions/mediaActions'
import { ADD_MOVIE } from '../../actions/types'

export class MovieForm extends Component {

    state = {
        monthWatched: "",
        yearWatched: "",
        name: "",
        notes: "",
        year: "",
        director: "",
        rating: "",
        image: "",
        improveNotes: ""
    }

    handleMovieReviewChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleMovieReviewSubmit = event => {
        event.preventDefault()
        const newMovie = {
            name: this.state.name,
            month_day_watched: this.state.monthWatched,
            year_watched: this.state.yearWatched,
            notes: this.state.notes,
            director: this.state.director,
            year: this.state.year,
            rating: this.state.rating,
            image: this.state.image,
            improve_notes: this.state.improveNotes
        }
        this.props.addMedia(newMovie, "movies", ADD_MOVIE)
        this.setState({
            monthWatched: "",
            yearWatched: "",
            name: "",
            notes: "",
            year: "",
            director: "",
            rating: "",
            image: "",
            improveNotes: ""
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
                    <textarea name="notes" value={this.state.notes} placeholder="The Good Movie Session Notes" onChange={this.handleMovieReviewChange} />
                </ul>
                <ul>
                    <textarea name="improveNotes" value={this.state.improveNotes} placeholder="The Could Be Better Movie Session Notes" onChange={this.handleMovieReviewChange} />
                </ul>
                <ul>
                    <button>Submit</button>
                </ul>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    movies: state.movies
})

export default connect(mapStateToProps, { addMedia })(MovieForm)