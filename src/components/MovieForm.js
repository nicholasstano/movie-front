import React, { Component } from 'react'

export class MovieForm extends Component {

    state = {
        name: "",
        notes: ""
    }

    handleMovieReviewChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleMovieReviewSubmit = event => {
        event.preventDefault()
        this.props.handleFormSubmit(this.state)
        this.setState({
            name: "",
            notes: ""
        })
    }

    render() {
        return (
            <form onSubmit={this.handleMovieReviewSubmit}>
                <label>Name<input type="text" name="name" value={this.state.name} placeholder="name" onChange={this.handleMovieReviewChange} />
                </label>
                <label>Notes<input type="text" name="notes" value={this.state.notes} placeholder="notes" onChange={this.handleMovieReviewChange} />
                </label>
                <button>Submit</button>
            </form>
        )
    }
}

export default MovieForm
