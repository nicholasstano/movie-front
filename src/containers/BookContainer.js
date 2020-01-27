import React, { Component } from 'react'
import MediaSearch from '../components/MediaSearch.js'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { url } from '../config'
import util from '../util'
import photos from '../photos'

export class BookContainer extends Component {
    render() {
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
            </div>
        )
    }
}

export default BookContainer
