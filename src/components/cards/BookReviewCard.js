import bookPhotos from '../../photos/books'
import React from 'react'

export default function BookReviewCard(props) {
    function stars() {
        let s = ""
        for (let i = 0; i < props.book.rating[0]; i++) {
            s = s + "⭑"
        }
        return s
    }
    return (
        <div className="mediaReviewCard" key={props.book.id}>
            <div className="mediaInfoAndPicture">
                <div>
                    <img src={bookPhotos[props.book.image]} alt={props.book.name} />
                </div>
                <div className="mediaStarsAndDate">
                    <p>{props.book.month_day_read}/{props.book.year_read}</p>
                    <p>{props.book.name} ({props.book.year}) by {props.book.author}</p>
                    <p>Rating: {stars()}</p>
                </div>
            </div>
            <div>
                <p className="mediaBold">The Good</p>
                <p>{props.book.notes}</p>
                <p className="mediaBold">The Could Be Better</p>
                <p> {props.book.improve_notes}</p>
            </div>
        </div >
    )
}