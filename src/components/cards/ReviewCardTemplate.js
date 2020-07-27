import React from 'react'
import StarRateIcon from '@material-ui/icons/StarRate';
import './reviewcard.scss'

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
            <div className="pictureAndDate">
                <p className="mediaPicture">
                    <img src={photos[image]} alt={name} />
                </p>
                <p>Rating: {stars().map((s, i) => <StarRateIcon key={i} />)}</p>
                <p>Date: {monthDayConsumed}/{yearConsumed}</p>
            </div>
            <h5 className='goodHeader'>The Good</h5>
            <p className='goodContent'>{notes}</p>
            <h5 className='betterHeader'>The Could Be Better</h5>
            <p className='betterContent'>{improveNotes}</p>
        </>
    )
}
