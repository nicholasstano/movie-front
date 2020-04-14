import React from 'react'
import StarRateIcon from '@material-ui/icons/StarRate';
import './reviewcard.css'

export default function ReviewCardTemplate(name, photos, rating, image, monthDayConsumed, yearConsumed, notes, improveNotes) {

    function stars() {
        let stars = []
        for (let i = 0; i < rating[0]; i++) {
            stars.push(i)
        }
        return stars
    }

    return (
        <>
            <div>
                <p className="mediaPicture">
                    <img src={photos[image]} alt={name} />
                </p>
                <p>Rating: {stars().map((s, i) => <StarRateIcon key={i} />)}</p>
                <p>Date: {monthDayConsumed}/{yearConsumed}</p>
            </div>
            <div>
                <h5>The Good</h5>
                <p>{notes}</p>
            </div>
            <div>
                <h5>The Could Be Better</h5>
                <p>{improveNotes}</p>
            </div>
        </>
    )
}
