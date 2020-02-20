import videoGamePhotos from '../../photos/videogames'
import React from 'react'

export default function VideoGameReviewCard(props) {
    function stars() {
        let s = ""
        for (let i = 0; i < props.videoGame.rating[0]; i++) {
            s = s + "⭑"
        }
        return s
    }
    return (
        <div className="mediaReviewCard" key={props.videoGame.id}>
            <div className="mediaInfoAndPicture">
                <div>
                    <img src={videoGamePhotos[props.videoGame.image]} alt={props.videoGame.name} />
                </div>
                <div className="mediaStarsAndDate">
                    <p>{props.videoGame.month_day_played}/{props.videoGame.year_played}</p>
                    <p>{props.videoGame.name} ({props.videoGame.year})</p>
                    <p>Rating: {stars()}</p>
                </div>
            </div>
            <div>
                <p className="mediaBold">The Good</p>
                <p>{props.videoGame.notes}</p>
                <p className="mediaBold">The Could Be Better</p>
                <p> {props.videoGame.improve_notes}</p>
            </div>
        </div>
    )
}

