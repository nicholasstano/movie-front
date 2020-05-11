import moviePhotos from '../../photos/movies'
import React from 'react'
import ReviewCardTemplate from './ReviewCardTemplate';

export default function MovieReviewCard(props) {

    const { rating, image, name, month_day_watched, year_watched, year, notes, improve_notes, director } = props.movie

    return (
        <div className="mediaReviewCard">
            <div><h5>{name} directed by {director} ({year})</h5></div>
            {ReviewCardTemplate(name, moviePhotos, rating, image, month_day_watched, year_watched, notes, improve_notes)}
        </div>
    )
}