import videoGamePhotos from '../../photos/videogames'
import React from 'react'
import ReviewCardTemplate from './ReviewCardTemplate';

export default function VideoGameReviewCard(props) {

    const { rating, image, name, month_day_played, year_played, year, notes, improve_notes } = props.videoGame

    return (
        <div className="mediaReviewCard videogames">
            <div><h5>{name} ({year})</h5></div>
            {ReviewCardTemplate(name, videoGamePhotos, rating, image, month_day_played, year_played, notes, improve_notes)}
        </div>
    )
}

