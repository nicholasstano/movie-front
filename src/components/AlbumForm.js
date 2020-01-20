import React, { Component } from 'react'

export class AlbumForm extends Component {

    state = {
        monthPlayed: "",
        yearPlayed: "",
        name: "",
        notes: "",
        year: "",
        rating: "",
        image: "",
        artist: ""
    }

    handleTextChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmitNewReview = event => {
        event.preventDefault()
        this.props.handleAlbumSubmit(this.state)
        this.setState({
            monthPlayed: "",
            yearPlayed: "",
            name: "",
            notes: "",
            year: "",
            rating: "",
            image: "",
            artist: ""
        })
    }

    render() {
        return (
            <form className="mediaForm" onSubmit={this.handleSubmitNewReview}>
                <ul>
                    <p onClick={this.props.closeAlbumForm}>Close Album Form</p>
                </ul>
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
                    <input type="text" name="image" value={this.state.image} placeholder="Image URL (ex: https://upload.wikimedia.org/wikipedia/en/5/57/Trans-Europe_Express_German.png)" onChange={this.handleTextChange} />
                </ul>
                <ul>
                    <input type="text" name="rating" value={this.state.rating} placeholder="Rating (ex: 5/5)" onChange={this.handleTextChange} />
                </ul>
                <ul>
                    <textarea name="notes" value={this.state.notes} placeholder="Album Notes" onChange={this.handleTextChange} />
                </ul>
                <ul>
                    <button>Submit</button>
                </ul>
            </form>
        )
    }
}

export default AlbumForm