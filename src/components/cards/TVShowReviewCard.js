import tvPhotos from '../../photos/tvshows'
import React from 'react'
import StarRateIcon from '@material-ui/icons/StarRate';

export default function TVShowReviewCard(props) {

    const { rating, image, name, month_day_watched, year_watched, year, season, notes, improve_notes } = props.tvshow

    function stars() {
        let stars = []
        for (let i = 0; i < rating[0]; i++) {
            stars.push(i)
        }
        return stars
    }

    return (
        <div className="mediaReviewCard">
            <div>
                <h5>{name} Season {season} ({year})</h5>
                <p className="mediaPicture">
                    <img src={tvPhotos[image]} alt={name} />
                </p>
                <p>Rating: {stars().map((s, i) => <StarRateIcon key={i} />)}</p>
                <p>Date: {month_day_watched}/{year_watched}</p>
            </div>
            <div>
                <h5>The Good</h5>
                <p>{notes}</p>
            </div>
            <div>
                <h5>The Could Be Better</h5>
                <p>{improve_notes}</p>
            </div>
        </div>
    )
}