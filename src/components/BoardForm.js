import React, { Component } from 'react'

export class BoardForm extends Component {

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
        this.props.handleBoardSubmit(this.state)
        this.setState({
            monthPlayed: "",
            yearPlayed: "",
            name: "",
            notes: "",
            year: "",
            rating: "",
            image: "",
            improveNotes: ""
        })
    }

    render() {
        return (
            <form className="mediaForm" onSubmit={this.handleSubmitNewReview}>
                <ul>
                    <p onClick={this.props.toggleBoardForm}>Close Board Game Form</p>
                </ul>
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
                    <input type="text" name="image" value={this.state.image} placeholder="terramystica)" onChange={this.handleTextChange} />
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

export default BoardForm