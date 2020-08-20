import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { editMedia } from '../../actions/mediaActions'
import { EDIT_BOOK } from '../../actions/types'

export class EditBookForm extends Component {

    state = {
        id: this.props.book.id,
        monthRead: this.props.book.month_day_read,
        yearRead: this.props.book.year_read,
        name: this.props.book.name,
        notes: this.props.book.notes,
        year: this.props.book.year,
        rating: this.props.book.rating,
        image: this.props.book.image,
        author: this.props.book.author,
        improveNotes: this.props.book.improve_notes
    }

    handleTextChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmitEditReview = event => {
        event.preventDefault()
        const editedBook = {
            id: this.state.id,
            name: this.state.name,
            month_day_read: this.state.monthRead,
            year_read: this.state.yearRead,
            notes: this.state.notes,
            year: this.state.year,
            rating: this.state.rating,
            image: this.state.image,
            author: this.state.author,
            improve_notes: this.state.improveNotes
        }
        this.props.editMedia(editedBook, "books", EDIT_BOOK)
        this.props.history.push('/')
    }
    render() {
        return (
            <form className="mediaForm" onSubmit={this.handleSubmitEditReview}>
                <ul>
                    <input type="text" name="monthRead" value={this.state.monthRead} placeholder="Month/Day Read (ex: 05/19)" onChange={this.handleTextChange} />
                </ul>
                <ul>
                    <input type="text" name="yearRead" value={this.state.yearRead} placeholder="Year Read (ex: 2013)" onChange={this.handleTextChange} />
                </ul>
                <ul>
                    <input type="text" name="name" value={this.state.name} placeholder="Book Name (ex: Harry Potter and the Goblet of Fire)" onChange={this.handleTextChange} />
                </ul>
                <ul>
                    <input type="text" name="author" value={this.state.author} placeholder="Author Name (ex: J. K. Rowling)" onChange={this.handleTextChange} />
                </ul>
                <ul>
                    <input type="text" name="year" value={this.state.year} placeholder="Year Released (ex: 2000)" onChange={this.handleTextChange} />
                </ul>
                <ul>
                    <input type="text" name="image" value={this.state.image} placeholder="Image URL (ex: https://upload.wikimedia.org/wikipedia/en/b/b6/Harry_Potter_and_the_Goblet_of_Fire_cover.png)" onChange={this.handleTextChange} />
                </ul>
                <ul>
                    <input type="text" name="rating" value={this.state.rating} placeholder="Rating (ex: 5/5)" onChange={this.handleTextChange} />
                </ul>
                <ul>
                    <textarea name="notes" value={this.state.notes} placeholder="Good Book Notes" onChange={this.handleTextChange} />
                </ul>
                <ul>
                    <textarea name="improveNotes" value={this.state.improveNotes} placeholder="Could Be Better Book Notes" onChange={this.handleTextChange} />
                </ul>
                <ul>
                    <button>Submit</button>
                </ul>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    books: state.books
})

export default withRouter(connect(mapStateToProps, { editMedia })(EditBookForm))