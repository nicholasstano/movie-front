import bookPhotos from '../../photos/books'
import React from 'react'
import ReviewCardTemplate from './ReviewCardTemplate';

export default function BookReviewCard(props) {

    const { rating, image, name, month_day_read, year_read, year, author, notes, improve_notes } = props.book

    return (
        <div className="mediaReviewCard books">
            <div><h5>{name} by {author} ({year})</h5></div>
            {ReviewCardTemplate(name, bookPhotos, rating, image, month_day_read, year_read, notes, improve_notes)}
        </div>
    )
}