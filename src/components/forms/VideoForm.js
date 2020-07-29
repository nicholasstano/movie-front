import React, { Component } from 'react'
import { addVideoGame, getVideoGames } from '../actions/videoGameActions'
import { connect } from 'react-redux'

export class VideoForm extends Component {

    state = {
        monthPlayed: "",
        yearPlayed: "",
        name: "",
        notes: "",
        year: "",
        rating: "",
        image: "",
        improveNotes: ""
    }

    handleTextChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmitNewReview = event => {
        event.preventDefault()
        const newVideoGame = {
            name: this.state.name,
            month_day_played: this.state.monthPlayed,
            year_played: this.state.yearPlayed,
            notes: this.state.notes,
            year: this.state.year,
            rating: this.state.rating,
            image: this.state.image,
            improve_notes: this.state.improveNotes
        }
        this.props.addVideoGame(newVideoGame)
        this.props.getVideoGames()
        this.setState({
            monthPlayed: "",
            yearPlayed: "",
            name: "",
            notes: "",
            year: "",
            rating: "",
            image: "",
            artist: "",
            improveNotes: ""
        })
    }

    render() {
        return (
            <form className="mediaForm" onSubmit={this.handleSubmitNewReview}>
                <ul>
                    <input type="text" name="monthPlayed" value={this.state.monthPlayed} placeholder="Month/Day Played (ex: 03/22)" onChange={this.handleTextChange} />
                </ul>
                <ul>
                    <input type="text" name="yearPlayed" value={this.state.yearPlayed} placeholder="Year Played (ex: 2017)" onChange={this.handleTextChange} />
                </ul>
                <ul>
                    <input type="text" name="name" value={this.state.name} placeholder="Name (ex: Starcraft)" onChange={this.handleTextChange} />
                </ul>
                <ul>
                    <input type="text" name="year" value={this.state.year} placeholder="Year Released (ex: 1998)" onChange={this.handleTextChange} />
                </ul>
                <ul>
                    <input type="text" name="image" value={this.state.image} placeholder="Image URL (ex: https://upload.wikimedia.org/wikipedia/en/9/93/StarCraft_box_art.jpg)" onChange={this.handleTextChange} />
                </ul>
                <ul>
                    <input type="text" name="rating" value={this.state.rating} placeholder="Rating (ex: 5/5)" onChange={this.handleTextChange} />
                </ul>
                <ul>
                    <textarea name="notes" value={this.state.notes} placeholder="Video Game Playthrough Notes" onChange={this.handleTextChange} />
                </ul>
                <ul>
                    <textarea name="improveNotes" value={this.state.improveNotes} placeholder="Video Game Could Be Better Notes" onChange={this.handleTextChange} />
                </ul>
                <ul>
                    <button>Submit</button>
                </ul>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    videoGames: state.videoGames
})

export default connect(mapStateToProps, { addVideoGame, getVideoGames })(VideoForm)