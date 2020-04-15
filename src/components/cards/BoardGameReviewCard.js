import boardGamePhotos from '../../photos/boardgames'
import React from 'react'
import ReviewCardTemplate from './ReviewCardTemplate';

export default function BoardReviewCard(props) {

    const { rating, image, name, month_day_played, year_played, year, notes, improve_notes } = props.board

    return (
        <div className="mediaReviewCard boardgames">
            <div><h5>{name} ({year})</h5></div>
            {ReviewCardTemplate(name, boardGamePhotos, rating, image, month_day_played, year_played, notes, improve_notes)}
        </div>
    )
}