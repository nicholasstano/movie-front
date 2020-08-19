import React, { Component } from 'react'
import { addTVShow, getTVShows } from '../../actions/tvShowActions'
import { connect } from 'react-redux'

export class TVShowForm extends Component {

    state = {
        monthWatched: "",
        yearWatched: "",
        name: "",
        notes: "",
        year: "",
        rating: "",
        image: "",
        season: "",
        improveNotes: ""
    }

    handleTextChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmitNewReview = event => {
        event.preventDefault()
        const newShow = {
            name: this.state.name,
            month_day_watched: this.state.monthWatched,
            year_watched: this.state.yearWatched,
            notes: this.state.notes,
            year: this.state.year,
            rating: this.state.rating,
            image: this.state.image,
            season: this.state.season,
            improve_notes: this.state.improveNotes
        }
        this.props.addTVShow(newShow)
        this.props.getTVShows()
        this.setState({
            monthWatched: "",
            yearWatched: "",
            name: "",
            notes: "",
            year: "",
            rating: "",
            image: "",
            season: "",
            improveNotes: ""
        })
    }

    render() {
        return (
            <form className="mediaForm" onSubmit={this.handleSubmitNewReview}>
                <ul>
                    <input type="text" name="monthWatched" value={this.state.monthWatched} placeholder="Month/Day Watched (ex: 04/17)" onChange={this.handleTextChange} />
                </ul>
                <ul>
                    <input type="text" name="yearWatched" value={this.state.yearWatched} placeholder="Year Watched (ex: 2015)" onChange={this.handleTextChange} />
                </ul>
                <ul>
                    <input type="text" name="name" value={this.state.name} placeholder="Name (ex: The Simpsons)" onChange={this.handleTextChange} />
                </ul>
                <ul>
                    <input type="text" name="season" value={this.state.season} placeholder="Season (ex: 1)" onChange={this.handleTextChange} />
                </ul>
                <ul>
                    <input type="text" name="year" value={this.state.year} placeholder="Year Released (ex: 1989)" onChange={this.handleTextChange} />
                </ul>
                <ul>
                    <input type="text" name="image" value={this.state.image} placeholder="Image URL (ex: https://upload.wikimedia.org/wikipedia/en/b/bd/The_Simpsons_-_The_Complete_1st_Season.jpg)" onChange={this.handleTextChange} />
                </ul>
                <ul>
                    <input type="text" name="rating" value={this.state.rating} placeholder="Rating (ex: 3/5)" onChange={this.handleTextChange} />
                </ul>
                <ul>
                    <textarea name="notes" value={this.state.notes} placeholder="Good Season Notes" onChange={this.handleTextChange} />
                </ul>
                <ul>
                    <textarea name="improveNotes" value={this.state.improveNotes} placeholder="Could Be Better Season Notes" onChange={this.handleTextChange} />
                </ul>
                <ul>
                    <button>Submit</button>
                </ul>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    tvShows: state.tvShows
})

export default connect(mapStateToProps, { addTVShow, getTVShows })(TVShowForm)