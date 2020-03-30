import albumPhotos from '../../photos/albums'
import React from 'react'
import StarRateIcon from '@material-ui/icons/StarRate';
import { Media } from 'reactstrap'
import albums from '../../photos/albums';

export default function AlbumReviewCard(props) {
    function stars() {
        let stars = []
        for (let i = 0; i < props.album.rating[0]; i++) {
            stars.push(i)
        }
        return stars
    }
    return (
        // <Media>
        //     <Media>
        //         <Media className="cardImage" object src={albumPhotos[props.album.image]} alt={props.album.name} />
        //     </Media>
        //     <Media body>
        //         <Media heading>Media heading</Media>
        //         <Media heading>Media heading</Media>
        //         <Media heading>Media heading</Media>
        //         <Media heading>Media heading</Media>

        //   Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        // </Media>
        // </Media>
        < div className="mediaReviewCard" key={props.album.id} >
            <div>
                <div className="mediaStarsAndDate">
                    <Media heading>{props.album.name} ({props.album.year}) by {props.album.artist}</Media>
                    <Media heading>{props.album.month_day_played}/{props.album.year_played} - Rating: {stars().map((s, i) => <StarRateIcon key={i} />)}</Media>
                </div>
                <div className="mediaPicture">
                    <img src={albumPhotos[props.album.image]} alt={props.album.name} />
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