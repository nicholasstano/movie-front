import React, { useState } from 'react'
import { connect } from 'react-redux'
import ReviewCardTemplate from './ReviewCardTemplate';
import bookPhotos from '../../photos/books'
import EditBookForm from '../forms/Edit Forms/EditBookForm';

const BookReviewCard = (props) => {

    const [editBook, setEditBook] = useState(false)

    const { rating, image, name, month_day_read, year_read, year, author, notes, improve_notes } = props.book

    console.log(props.user.user)
    return (
        <div className="mediaReviewCard">
            <div className='mediaReviewCardHeader'>
                <h5>{name} by {author} ({year}) {props.user && props.user.user.username === 'admin' && <button onClick={() => setEditBook(!editBook)}>Edit</button>}
                </h5>
            </div>
            {editBook
                ?
                <EditBookForm book={props.book} />
                :
                ReviewCardTemplate(name, bookPhotos, rating, image, month_day_read, year_read, notes, improve_notes)
            }
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps)(BookReviewCard)