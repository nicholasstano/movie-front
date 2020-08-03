import React from 'react'
import StarRate from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import './reviewcard.scss'

export default function ReviewCardTemplate(name, photos, rating, image, monthDayConsumed, yearConsumed, notes, improveNotes) {

    function stars() {
        let starArr = []
        for (let i = 0; i < rating[0]; i++) {
            starArr.push(1)
        }
        while (starArr.length !== 5) {
            starArr.push(0)
        }
        return starArr
    }

    return (
        <>
            <div className="pictureAndDate">
                <p className="mediaPicture">
                    <img src={photos[image]} alt={name} />
                </p>
                <p>Rating: {stars().map((s, i) => s === 1 ? <StarRate key={i} /> : <StarBorderIcon key={i} />)}</p>
                <p>Date: {monthDayConsumed}/{yearConsumed}</p>
            </div>
            <h5 className='goodHeader'>The Good</h5>
            <p className='goodContent'>{notes}</p>
            <h5 className='betterHeader'>The Could Be Better</h5>
            <p className='betterContent'>{improveNotes}</p>
        </>
    )
}
