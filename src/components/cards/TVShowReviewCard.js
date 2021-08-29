import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ReviewCardTemplate from './ReviewCardTemplate';
import tvPhotos from '../../photos/tvshows'
import EditTVShowForm from '../forms/editForms/EditTVShowForm';
import { deleteMedia } from '../actions/mediaActions'
import { DELETE_TV_SHOW } from '../actions/types'

const TVShowReviewCard = (props) => {

    const [editMedia, setEditMedia] = useState(false)
    const [showDeleteButton, setShowDeleteButton] = useState(true)

    const { rating, image, name, month_day_watched, year_watched, year, season, notes, improve_notes } = props.tvshow

    const removeMedia = () => {
        props.deleteMedia(props.tvshow.id, "tvshows", DELETE_TV_SHOW)
        props.history.push('/')
    }

    return (
        <div className="mediaReviewCard">
            <div className='mediaReviewCardHeader'>
                <h5>{name} Season {season} ({year}) {props.user && props.user.user.username === 'admin' &&
                    <div><button onClick={() => setEditMedia(!editMedia)}>Edit</button>
                        <button onClick={() => setShowDeleteButton(!showDeleteButton)}>Show Delete Button</button>
                        {showDeleteButton ? null : <button onClick={() => removeMedia()}>Delete</button>}
                    </div>
                }
                </h5>
            </div>
            {editMedia
                ?
                <EditTVShowForm tvshow={props.tvshow} />
                :
                ReviewCardTemplate(name, tvPhotos, rating, image, month_day_watched, year_watched, notes, improve_notes)
            }
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.user
})

export default withRouter(connect(mapStateToProps, { deleteMedia })(TVShowReviewCard))