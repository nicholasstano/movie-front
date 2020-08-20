import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ReviewCardTemplate from './ReviewCardTemplate';
import albumPhotos from '../../photos/albums'
import EditAlbumForm from '../forms/editForms/EditAlbumForm';
import { deleteAlbum } from '../actions/albumActions'

const AlbumReviewCard = (props) => {

    const [editMedia, setEditMedia] = useState(false)
    const [showDeleteButton, setShowDeleteButton] = useState(true)

    const { rating, name, artist, year, image, month_day_played, year_played, notes, improve_notes } = props.album

    const removeAlbum = () => {
        props.deleteAlbum(props.album.id)
        props.history.push('/')
    }

    return (
        <div className="mediaReviewCard">
            <div className='mediaReviewCardHeader'>
                <h5>{name} by {artist} ({year})</h5>
                <h5>{name} by {artist} ({year}) {props.user && props.user.user.username === 'admin' &&
                    <><button onClick={() => setEditMedia(!editMedia)}>Edit</button>
                        <button onClick={() => setShowDeleteButton(!showDeleteButton)}>Show Delete Button</button>
                        {showDeleteButton ? null : <button onClick={() => removeAlbum()}>Delete</button>}
                    </>
                }
                </h5>
            </div>
            {editMedia
                ?
                <EditAlbumForm album={props.album} />
                :
                ReviewCardTemplate(name, albumPhotos, rating, image, month_day_played, year_played, notes, improve_notes)
            }
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.user
})

export default withRouter(connect(mapStateToProps, { deleteAlbum })(AlbumReviewCard))