import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { editMedia } from '../../actions/mediaActions'
import { EDIT_BOARD_GAME } from '../../actions/types'

export class EditBoardGameForm extends Component {

    state = {
        id: this.props.board.id,
        monthPlayed: this.props.board.month_day_played,
        yearPlayed: this.props.board.year_played,
        name: this.props.board.name,
        notes: this.props.board.notes,
        year: this.props.board.year,
        rating: this.props.board.rating,
        image: this.props.board.image,
        improveNotes: this.props.board.improve_notes
    }

    handleTextChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmitEditReview = event => {
        event.preventDefault()
        const editedBoardGame = {
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
        this.props.editMedia(editedBoardGame, "boards", EDIT_BOARD_GAME)
        this.props.history.push('/')
    }

    render() {
        return (
            <form className="mediaForm" onSubmit={this.handleSubmitEditReview}>
                <ul>
                    <input type="text" name="monthPlayed" value={this.state.monthPlayed} placeholder="Month/Day Played (ex: 01/19)" onChange={this.handleTextChange} />
                </ul>
                <ul>
                    <input type="text" name="yearPlayed" value={this.state.yearPlayed} placeholder="Year Played (ex: 2018)" onChange={this.handleTextChange} />
                </ul>
                <ul>
                    <input type="text" name="name" value={this.state.name} placeholder="Name (ex: Terra Mystica)" onChange={this.handleTextChange} />
                </ul>
                <ul>
                    <input type="text" name="year" value={this.state.year} placeholder="Year Released (ex: 2012)" onChange={this.handleTextChange} />
                </ul>
                <ul>
                    <input type="text" name="image" value={this.state.image} placeholder="terramystica" onChange={this.handleTextChange} />
                </ul>
                <ul>
                    <input type="text" name="rating" value={this.state.rating} placeholder="Rating (ex: 5/5)" onChange={this.handleTextChange} />
                </ul>
                <ul>
                    <textarea name="notes" value={this.state.notes} placeholder="Board Game Session Notes" onChange={this.handleTextChange} />
                </ul>
                <ul>
                    <textarea name="improveNotes" value={this.state.improveNotes} placeholder="Could Be Better" onChange={this.handleTextChange} />
                </ul>
                <ul>
                    <button>Submit</button>
                </ul>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    boardGames: state.boardGames
})

export default withRouter(connect(mapStateToProps, { editMedia })(EditBoardGameForm))