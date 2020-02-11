import tvPhotos from '../../photos/tvshows'
import React from 'react'

export default function TVShowReviewCard(props) {

    function stars() {
        let s = ""
        for (let i = 0; i < props.tvshow.rating[0]; i++) {
            s = s + "⭑"
        }
        return s
    }
    return (
        <div className="mediaReviewCard" key={props.tvshow.id}>
            <div className="mediaInfoAndPicture">
                <div>
                    <img src={tvPhotos[props.tvshow.image]} alt={props.tvshow.name} />
                </div>
                <div className="mediaStarsAndDate">
                    <p>{props.tvshow.month_day_watched}/{props.tvshow.year_watched}</p>
                    <p>{props.tvshow.name} ({props.tvshow.year})</p>
                    <p>Rating: {stars()}</p>
                </div>
            </div>
            <div>
                <p className="mediaBold">The Good</p>
                <p>{props.tvshow.notes}</p>
                <p className="mediaBold">The Could Be Better</p>
                <p> {props.tvshow.improve_notes}</p>
            </div>
        </div>
    )
}