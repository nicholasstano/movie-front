import React, { Component } from 'react'
import albumPhotos from '../../photos/albums'


export class AlbumReviewCard extends Component {

    stars() {
        let s = ""
        for (let i = 0; i < this.props.album.rating[0]; i++) {
            s = s + "⭑"
        }
        return s
    }

    render() {
        return (
            <div className="mediaReviewCard" key={this.props.album.id}>
                <ul><h1>{this.props.album.artist}</h1></ul>
                <ul><h1>{this.props.album.name} ({this.props.album.year})</h1></ul>
                <img src={albumPhotos[this.props.album.image]} alt={this.props.album.name} />
                <div>
                    <ul>{this.props.album.month_day_played}/{this.props.album.year_played}</ul>
                </div>
                <p className="rating">Rating: {this.stars()}
                </p>
                <div>
                    <p>The Good: {this.props.album.notes}</p>
                    <p>The Could Be Better: {this.props.album.improve_notes}</p>
                </div>
            </div >
        )
    }
}

export default AlbumReviewCard