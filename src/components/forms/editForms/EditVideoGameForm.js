import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { editMedia } from '../../actions/mediaActions'
import { EDIT_VIDEO_GAME } from '../../actions/types'

export class EditVideoGameForm extends Component {

    state = {
        id: this.props.videoGame.id,
        monthPlayed: this.props.videoGame.month_day_played,
        yearPlayed: this.props.videoGame.year_played,
        name: this.props.videoGame.name,
        notes: this.props.videoGame.notes,
        year: this.props.videoGame.year,
        rating: this.props.videoGame.rating,
        image: this.props.videoGame.image,
        improveNotes: this.props.videoGame.improve_notes
    }

    handleTextChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmitEditReview = event => {
        event.preventDefault()
        const editedVideoGame = {
            id: this.state.id,
            name: this.state.name,
            month_day_played: this.state.monthPlayed,
            year_played: this.state.yearPlayed,
            notes: this.state.notes,
            year: this.state.year,
            rating: this.state.rating,
            image: this.state.image,
            improve_notes: this.state.improveNotes
        }
        this.props.editMedia(editedVideoGame, "videos", EDIT_VIDEO_GAME)
        this.props.history.push('/')
    }

    render() {
        return (
            <form className="mediaForm" onSubmit={this.handleSubmitEditReview}>
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

export default withRouter(connect(mapStateToProps, { editMedia })(EditVideoGameForm))