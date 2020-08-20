import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { editMedia } from '../../actions/mediaActions'
import { EDIT_ALBUM } from '../../actions/types'

export class EditAlbumForm extends Component {

    state = {
        id: this.props.album.id,
        monthPlayed: this.props.album.month_day_played,
        yearPlayed: this.props.album.year_played,
        name: this.props.album.name,
        notes: this.props.album.notes,
        year: this.props.album.year,
        rating: this.props.album.rating,
        image: this.props.album.image,
        artist: this.props.album.artist,
        improveNotes: this.props.album.improve_notes
    }

    handleTextChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmitEditReview = event => {
        event.preventDefault()
        const editedAlbum = {
            id: this.state.id,
            name: this.state.name,
            artist: this.state.artist,
            month_day_played: this.state.monthPlayed,
            year_played: this.state.yearPlayed,
            notes: this.state.notes,
            year: this.state.year,
            rating: this.state.rating,
            image: this.state.image,
            improve_notes: this.state.improveNotes
        }
        this.props.editMedia(editedAlbum, "albums", EDIT_ALBUM)
        this.props.history.push('/')
    }
    render() {
        return (
            <form className="mediaForm" onSubmit={this.handleSubmitEditReview}>
                <ul>
                    <input type="text" name="monthPlayed" value={this.state.monthPlayed} placeholder="Month/Day Listened (ex: 02/13)" onChange={this.handleTextChange} />
                </ul>
                <ul>
                    <input type="text" name="yearPlayed" value={this.state.yearPlayed} placeholder="Year Listened (ex: 2019)" onChange={this.handleTextChange} />
                </ul>
                <ul>
                    <input type="text" name="name" value={this.state.name} placeholder="Album Name (ex: Trans Europa Express)" onChange={this.handleTextChange} />
                </ul>
                <ul>
                    <input type="text" name="artist" value={this.state.artist} placeholder="Artist Name (ex: Kraftwerk)" onChange={this.handleTextChange} />
                </ul>
                <ul>
                    <input type="text" name="year" value={this.state.year} placeholder="Year Released (ex: 1977)" onChange={this.handleTextChange} />
                </ul>
                <ul>
                    <input type="text" name="image" value={this.state.image} placeholder="transeuropaexpress" onChange={this.handleTextChange} />
                </ul>
                <ul>
                    <input type="text" name="rating" value={this.state.rating} placeholder="Rating (ex: 5/5)" onChange={this.handleTextChange} />
                </ul>
                <ul>
                    <textarea name="notes" value={this.state.notes} placeholder="The Good" onChange={this.handleTextChange} />
                </ul>
                <ul>
                    <textarea name="improveNotes" value={this.state.improveNotes} placeholder="The Could Be Better" onChange={this.handleTextChange} />
                </ul>
                <ul>
                    <button>Submit</button>
                </ul>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    albums: state.albums
})

export default withRouter(connect(mapStateToProps, { editMedia })(EditAlbumForm))