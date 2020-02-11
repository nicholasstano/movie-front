import BookHome from '../components/mediahomes/BookHome.js'
import BookSidebar from '../components/sidebars/BookSidebar.js'
import BookReviewCard from '../components/cards/BookReviewCard.js'
import React, { Component } from 'react'
import { url } from '../config'
import util from '../util'

export class BookContainer extends Component {

    state = { bookReviews: [], media: null }

    componentDidMount() {
        fetch(`${url}/books`)
            .then(response => response.json())
            .then(books => {
                this.setState({
                    bookReviews: util.sortMediaById(books)
                })
            })
    }

    mediaClickHandler = (mediaClicked) => {
        this.setState({ media: mediaClicked })
    }

    render() {
        return (
            <div className="mediaContainer font-weight-light">
                <div>
                    <BookSidebar bookReviews={this.state.bookReviews} mediaClickHandler={this.mediaClickHandler} />
                </div>
                <div>
                    {this.state.media ? <BookReviewCard key={this.state.media.id} book={this.state.media} /> : <BookHome />}
                </div>
            </div>
        )
    }
}

export default BookContainer
