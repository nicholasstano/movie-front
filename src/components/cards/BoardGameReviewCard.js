import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import boardGamePhotos from '../../photos/boardgames'
import ReviewCardTemplate from './ReviewCardTemplate';
import EditBoardGameForm from '../forms/editForms/EditBoardGameForm';
import { deleteMedia } from '../actions/mediaActions'
import { DELETE_BOARD_GAME } from '../actions/types'

const BoardReviewCard = (props) => {

    const [editMedia, setEditMedia] = useState(false)
    const [showDeleteButton, setShowDeleteButton] = useState(true)

    const { rating, image, name, month_day_played, year_played, year, notes, improve_notes } = props.board

    const removeMedia = () => {
        props.deleteMedia(props.board.id, "boards", DELETE_BOARD_GAME)
        props.history.push('/')
    }

    return (
        <div className="mediaReviewCard">
            <div className='mediaReviewCardHeader'>
                <h5>{name} ({year}) {props.user && props.user.user.username === 'admin' &&
                    <div><button onClick={() => setEditMedia(!editMedia)}>Edit</button>
                        <button onClick={() => setShowDeleteButton(!showDeleteButton)}>Show Delete Button</button>
                        {showDeleteButton ? null : <button onClick={() => removeMedia()}>Delete</button>}
                    </div>
                }
                </h5>
            </div>
            {editMedia
                ?
                <EditBoardGameForm board={props.board} />
                :
                ReviewCardTemplate(name, boardGamePhotos, rating, image, month_day_played, year_played, notes, improve_notes)
            }
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.user
})

export default withRouter(connect(mapStateToProps, { deleteMedia })(BoardReviewCard))