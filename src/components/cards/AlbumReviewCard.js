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
                <ul class="list-group list-group-horizontal">
                    <li className="mediaPicture list-group-item"><img src={albumPhotos[props.album.image]} alt={props.album.name} /></li>
                    <li className="list-group-item"><Media>{props.album.name} ({props.album.year}) by {props.album.artist}</Media></li>
                    <li className="list-group-item"><Media>Rating: {stars().map((s, i) => <StarRateIcon key={i} />)} ({props.album.month_day_played}/{props.album.year_played}) </Media></li>
                </ul>
            </div>
            <div>
                <ul class="list-group">
                    <li class="list-group-item"><Media heading>The Good</Media></li>
                    <li class="list-group-item"><Media body>{props.album.notes}</Media></li>
                    <li class="list-group-item"><Media heading>The Could Be Better</Media>
                    </li>
                    <li class="list-group-item"><Media body>{props.album.improve_notes}</Media></li>
                </ul>
            </div>
        </div >
    )
}