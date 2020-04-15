import tvPhotos from '../../photos/tvshows'
import React from 'react'
import ReviewCardTemplate from './ReviewCardTemplate';

export default function TVShowReviewCard(props) {

    const { rating, image, name, month_day_watched, year_watched, year, season, notes, improve_notes } = props.tvshow

    return (
        <div className="mediaReviewCard television">
            <div><h5>{name} Season {season} ({year})</h5></div>
            {ReviewCardTemplate(name, tvPhotos, rating, image, month_day_watched, year_watched, notes, improve_notes)}
        </div>
    )
}