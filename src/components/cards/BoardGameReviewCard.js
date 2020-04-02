import boardGamePhotos from '../../photos/boardgames'
import React from 'react'
import StarRateIcon from '@material-ui/icons/StarRate';

export default function BoardReviewCard(props) {

    const { rating, image, name, month_day_played, year_played, year, notes, improve_notes } = props.board

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
                <h5>{name} ({year})</h5>
                <p className="mediaPicture">
                    <img src={boardGamePhotos[image]} alt={name} />
                </p>
                <p>Rating: {stars().map((s, i) => <StarRateIcon key={i} />)}</p>
                <p>Date: {month_day_played}/{year_played}</p>
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