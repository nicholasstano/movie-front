import React, { Component } from 'react'
import MediaSearch from '../MediaSearch.js'
import 'react-dropdown/style.css'
import util from '../../util'
import './sidebar.css'

export class BookSidebar extends Component {

    state = { mediaSearch: "" }


    handleSearchTermChange = (search) => {
        this.setState({ mediaSearch: search })
    }

    searchMedia = () => {
        return util.searchMedia(this.props.reviews, "name", this.state.mediaSearch)
    }

    render() {
        let bookReviews = this.searchMedia().map(book => <div className="mediaTitles" key={book.id}>
            <button onClick={() => this.props.mediaClickHandler(book)}>{book.name}
                <div className="monthDay">({book.month_day_read}/{book.year_read})</div>
            </button>
        </div>)
        return (
            <div className="mediaSidebar">
                <div className="mediaSearch">
                    <MediaSearch onChange={this.handleSearchTermChange} mediaName={"Books"} />
                </div>
                {bookReviews}
            </div>
        )
    }
}

export default BookSidebar