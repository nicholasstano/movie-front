import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ReviewCardTemplate from './ReviewCardTemplate';
import bookPhotos from '../../photos/books'
import EditBookForm from '../forms/editForms/EditBookForm';
import { deleteMedia } from '../actions/mediaActions'
import { DELETE_BOOK } from '../actions/types'

const BookReviewCard = (props) => {

    const [editMedia, setEditMedia] = useState(false)
    const [showDeleteButton, setShowDeleteButton] = useState(true)

    const { rating, image, name, month_day_read, year_read, year, author, notes, improve_notes } = props.book

    const removeBook = () => {
        props.deleteMedia(props.book.id, "books", DELETE_BOOK)
        props.history.push('/')
    }

    return (
        <div className="mediaReviewCard">
            <div className='mediaReviewCardHeader'>
                <h5>{name} by {author} ({year}) {props.user && props.user.user.username === 'admin' &&
                    <><button onClick={() => setEditMedia(!editMedia)}>Edit</button>
                        <button onClick={() => setShowDeleteButton(!showDeleteButton)}>Show Delete Button</button>
                        {showDeleteButton ? null : <button onClick={() => removeBook()}>Delete</button>}
                    </>
                }
                </h5>
            </div>
            {editMedia
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

export default withRouter(connect(mapStateToProps, { deleteMedia })(BookReviewCard))