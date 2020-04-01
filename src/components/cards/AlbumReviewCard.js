import albumPhotos from '../../photos/albums'
import React from 'react'
import StarRateIcon from '@material-ui/icons/StarRate';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

export default function AlbumReviewCard(props) {

    const { rating, name, artist, year, image, month_day_played, year_played, notes, improve_notes } = props.album

    function stars() {
        let stars = []
        for (let i = 0; i < rating[0]; i++) {
            stars.push(i)
        }
        return stars
    }

    return (
        <ListGroup className="mediaReviewCard">
            <ListGroupItem>
                <ListGroupItemHeading>{name} by {artist} ({year})
                </ListGroupItemHeading>
                <ListGroupItemText className="mediaPicture">
                    <img src={albumPhotos[image]} alt={name} />
                </ListGroupItemText>
                <ListGroupItemText>Rating: {stars().map((s, i) =>
                    <StarRateIcon key={i} />)}
                </ListGroupItemText>
                <ListGroupItemText>Date: {month_day_played}/{year_played}
                </ListGroupItemText>
            </ListGroupItem>
            <ListGroupItem>
                <ListGroupItemHeading>The Good</ListGroupItemHeading>
                <ListGroupItemText>
                    {notes}
                </ListGroupItemText>
            </ListGroupItem>
            <ListGroupItem>
                <ListGroupItemHeading>The Could Be Better</ListGroupItemHeading>
                <ListGroupItemText>
                    {improve_notes}
                </ListGroupItemText>
            </ListGroupItem>
        </ListGroup>
    )
}