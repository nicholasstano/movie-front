import React, { Component } from 'react'
import BookReviewCard from '../components/cards/BookReviewCard.js'
import MediaSearch from '../components/MediaSearch.js'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { url } from '../config'
import util from '../util'
import photos from '../photos/favorites'

export class BookContainer extends Component {

    state = { bookSearch: "", bookReviews: [], option: "All years", selectedYear: [] }

    componentDidMount() {
        fetch(`${url}/books`)
            .then(response => response.json())
            .then(books => this.setState({ bookReviews: books.reverse(), selectedYear: books }));
    }

    handleSearchTermChange = (search) => {
        this.setState({ bookSearch: search })
    }

    searchBooks = () => {
        return util.searchMedia(this.state.selectedYear, "name", this.state.bookSearch)
    }

    changeYear = (event) => {
        let allBooks = this.state.bookReviews
        let yearsBooks = this.state.bookReviews.filter(book => book.year_read === event.value)
        if (event.value === "All years") {
            this.setState({ selectedYear: allBooks, option: "All years" })
        }
        else if (event.value) {
            this.setState({ selectedYear: yearsBooks, option: event.value })
        }
    }

    render() {
        let years = this.state.bookReviews.map(book => book.year_read)
        let uniqueYears = [...new Set(years)]
        let options = ["All years", ...uniqueYears]
        let bookReviews = this.searchBooks().map(book => <BookReviewCard key={book.id} book={book} />)
        let favoriteFiveBooks = photos.books.map((book, index) =>
            <div key={book}>
                <p>{index + 1}</p>
                <img src={book} alt={book} />
            </div>)
        return (
            <div className="mediaContainer">
                <h1 className="mediaHeader">Book Reviews</h1>
                <div className="mediaFavoriteFive">{favoriteFiveBooks}</div>
                <p>Hmm, maybe I should stop revisiting the same stories and branch out more?</p>
                <div className="mediaDropAndSearch">
                    <Dropdown className="mediaDropdown" options={options} onChange={this.changeYear} value={this.state.option} placeholder="Select an option" />
                    <MediaSearch value={this.state.bookSearch} onChange={this.handleSearchTermChange} mediaName={"Books"} />
                </div>
                {bookReviews}
            </div>
        )
    }
}

export default BookContainer
