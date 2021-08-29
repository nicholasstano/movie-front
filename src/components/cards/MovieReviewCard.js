import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ReviewCardTemplate from './ReviewCardTemplate';
import moviePhotos from '../../photos/movies'
import EditMovieForm from '../forms/editForms/EditMovieForm';
import { deleteMedia } from '../actions/mediaActions'
import { DELETE_MOVIE } from '../actions/types'

const MovieReviewCard = (props) => {

    const [editMedia, setEditMedia] = useState(false)
    const [showDeleteButton, setShowDeleteButton] = useState(true)

    const { rating, image, name, month_day_watched, year_watched, year, notes, improve_notes, director } = props.movie

    const removeMedia = () => {
        props.deleteMedia(props.movie.id, "movies", DELETE_MOVIE)
        props.history.push('/')
    }

    return (
        <div className="mediaReviewCard">
            <div className='mediaReviewCardHeader'>
                <h5>{name} directed by {director} ({year}) {props.user && props.user.user.username === 'admin' &&
                    <div><button onClick={() => setEditMedia(!editMedia)}>Edit</button>
                        <button onClick={() => setShowDeleteButton(!showDeleteButton)}>Show Delete Button</button>
                        {showDeleteButton ? null : <button onClick={() => removeMedia()}>Delete</button>}
                    </div>
                }
                </h5>
            </div>
            {editMedia
                ?
                <EditMovieForm movie={props.movie} />
                :
                ReviewCardTemplate(name, moviePhotos, rating, image, month_day_watched, year_watched, notes, improve_notes)
            }
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.user
})

export default withRouter(connect(mapStateToProps, { deleteMedia })(MovieReviewCard)) 