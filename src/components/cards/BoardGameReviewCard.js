import boardGamePhotos from '../../photos/boardgames'
import React from 'react'

export default function BoardReviewCard(props) {
    function stars() {
        let s = ""
        for (let i = 0; i < props.board.rating[0]; i++) {
            s = s + "⭑"
        }
        return s
    }
    return (
        <div className="mediaReviewCard" key={props.board.id}>
            <div className="mediaInfoAndPicture">
                <div>
                    <img src={boardGamePhotos[props.board.image]} alt={props.board.name} />
                </div>
                <div className="mediaStarsAndDate">
                    <p>{props.board.month_day_played}/{props.board.year_played}</p>
                    <p>{props.board.name} ({props.board.year})</p>
                    <p>Rating: {stars()}</p>
                </div>
            </div>
            <div>
                <p className="mediaBold">The Good</p>
                <p>{props.board.notes}</p>
                <p className="mediaBold">The Could Be Better</p>
                <p> {props.board.improve_notes}</p>
            </div>
        </div >
    )
}