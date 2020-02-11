import moviePhotos from '../../photos/movies'
import React from 'react'

export default function MovieReviewCard(props) {
    function stars() {
        let s = ""
        for (let i = 0; i < props.movie.rating[0]; i++) {
            s = s + "⭑"
        }
        return s
    }
    return (
        <div className="mediaReviewCard" key={props.movie.id}>
            <div className="mediaInfoAndPicture">
                <div>
                    <img src={moviePhotos[props.movie.image]} alt={props.movie.name} />
                </div>
                <div className="mediaStarsAndDate">
                    <p>{props.movie.month_day_watched}/{props.movie.year_watched}</p>
                    <p>{props.movie.name} ({props.movie.year}) by {props.movie.artist}</p>
                    <p>Rating: {stars()}</p>
                </div>
            </div>
            <div>
                <p className="mediaBold">The Good</p>
                <p>{props.movie.notes}</p>
                <p className="mediaBold">The Could Be Better</p>
                <p> {props.movie.improve_notes}</p>
            </div>
        </div>
    )
}