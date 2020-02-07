import React, { Component } from 'react'
import bookPhotos from '../photos/books'

export class BookReviewCard extends Component {

    state = { description: false }

    stars() {
        let s = ""
        for (let i = 0; i < this.props.book.rating[0]; i++) {
            s = s + "⭑"
        }
        return s
    }

    render() {
        return (
            this.state.description ?
                <div className="mediaReviewCard" key={this.props.book.id}>
                    <div>
                        <ul>{this.props.book.month_day_read}/{this.props.book.year_read}</ul>
                        <ul><button onClick={() => this.setState({ description: !this.state.description })}>-</button> {this.props.book.name} ({this.props.book.year})</ul>
                        <ul>{this.props.book.author}</ul>
                    </div>
                    <img src={bookPhotos[this.props.book.image]} alt={this.props.book.name} />
                    <p className="rating">Rating: {this.stars()}
                    </p>
                    <div>
                        <p>The Good: {this.props.book.notes}</p>
                        <p>The Could Be Better: {this.props.book.improve_notes}</p>
                    </div>
                </div>
                :
                <div className="mediaReviewList"><button onClick={() => this.setState({ description: !this.state.description })}>+</button> {this.props.book.month_day_read}/{this.props.book.year_read} - {this.props.book.name} ({this.props.book.year})</div>
        )
    }
}

export default BookReviewCard