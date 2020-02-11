import React, { Component } from 'react'
import MediaSearch from '../MediaSearch.js'
import 'react-dropdown/style.css'
import util from '../../util'

export class BookSidebar extends Component {

    state = { mediaSearch: "" }


    handleSearchTermChange = (search) => {
        this.setState({ mediaSearch: search })
    }

    searchMedia = () => {
        return util.searchMedia(this.props.bookReviews, "name", this.state.mediaSearch)
    }

    render() {
        let bookReviews = this.searchMedia().map(book => <div className="mediaTitleBooks" key={book.id}><div onClick={() => this.props.mediaClickHandler(book)}>{book.name}<div className="monthDay">
            ({book.month_day_read}/{book.year_read})
            </div>
        </div></div>)
        return (
            <div className="mediaSidebar navbar-dark bg-dark">
                <div className="mediaSearch">
                    <MediaSearch onChange={this.handleSearchTermChange} mediaName={"Books"} />
                </div>
                {bookReviews}
            </div>
        )
    }
}

export default BookSidebar