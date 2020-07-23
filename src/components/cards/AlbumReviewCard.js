import React from 'react'
import ReviewCardTemplate from './ReviewCardTemplate';
import albumPhotos from '../../photos/albums'

export default function AlbumReviewCard(props) {

    const { rating, name, artist, year, image, month_day_played, year_played, notes, improve_notes } = props.album

    return (
        <div className="mediaReviewCard">
            <div className='mediaReviewCardHeader'>
                <h5>{name} by {artist} ({year})</h5>
            </div>
            {ReviewCardTemplate(name, albumPhotos, rating, image, month_day_played, year_played, notes, improve_notes)}
        </div>
    )
}