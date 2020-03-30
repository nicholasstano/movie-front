import albumPhotos from '../../photos/albums'
import React from 'react'
import StarRateIcon from '@material-ui/icons/StarRate';

export default function AlbumReviewCard(props) {
    function stars() {
        let stars = []
        for (let i = 0; i < 4; i++) {
            stars.push(i)
        }
        return stars
    }
    return (
        < div className="mediaReviewCard" key={props.album.id} >
            <div className="mediaInfoAndPicture">
                <div>
                    <img src={albumPhotos[props.album.image]} alt={props.album.name} />
                </div>
                <div className="mediaStarsAndDate">
                    <p>{props.album.month_day_played}/{props.album.year_played}</p>
                    <p>{props.album.name} ({props.album.year}) by {props.album.artist}</p>
                    <p>Rating: {stars().map((s, i) => <StarRateIcon key={i} />)}</p>
                </div>
            </div>
            <div>
                <p className="mediaBold">The Good</p>
                <p>{props.album.notes}</p>
                <p className="mediaBold">The Could Be Better</p>
                <p> {props.album.improve_notes}</p>
            </div>
        </div >
    )
}