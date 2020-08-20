import React, { Component } from 'react'
import { connect } from 'react-redux'
import BookHome from '../../components/mediahomes/BookHome.js'
import BookSidebar from '../../components/sidebars/BookSidebar.js'
import BookReviewCard from '../../components/cards/BookReviewCard.js'
import { getMedia } from '../../components/actions/mediaActions.js'
import { GET_BOOKS } from '../../components/actions/types'
import './container.scss'

export class BookContainer extends Component {

    state = { media: null }

    componentDidMount() {
        this.props.getMedia("books", GET_BOOKS)
    }

    mediaClickHandler = (mediaClicked) => {
        window.scrollTo(0, 0)
        this.setState({ media: mediaClicked })
    }

    render() {
        const { books } = this.props.books
        const { media } = this.state
        return (
            <div className="mediaContainer">
                <div>
                    <BookSidebar reviews={books} mediaClickHandler={this.mediaClickHandler} />
                </div>
                <div className="mediaContent">
                    {this.state.media ? <BookReviewCard key={media.id} book={media} /> : <BookHome />}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    books: state.books
})

export default connect(mapStateToProps, { getMedia })(BookContainer)