import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { editMedia } from '../../actions/mediaActions'
import { EDIT_MOVIE } from '../../actions/types'

export class EditMovieForm extends Component {

    state = {
        id: this.props.movie.id,
        monthWatched: this.props.movie.month_day_watched,
        yearWatched: this.props.movie.year_watched,
        name: this.props.movie.name,
        notes: this.props.movie.notes,
        year: this.props.movie.year,
        director: this.props.movie.director,
        rating: this.props.movie.rating,
        image: this.props.movie.image,
        improveNotes: this.props.movie.improve_notes
    }

    handleMovieReviewChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleMovieReviewSubmit = event => {
        event.preventDefault()
        const editedMovie = {
            id: this.state.id,
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
        this.props.editMedia(editedMovie, "movies", EDIT_MOVIE)
        this.props.history.push('/')
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

export default withRouter(connect(mapStateToProps, { editMedia })(EditMovieForm))