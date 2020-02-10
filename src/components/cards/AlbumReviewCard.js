import React, { Component } from 'react'
import albumPhotos from '../../photos/albums'


export class AlbumReviewCard extends Component {

    state = { description: false }

    stars() {
        let s = ""
        for (let i = 0; i < this.props.album.rating[0]; i++) {
            s = s + "⭑"
        }
        return s
    }

    render() {
        console.log(this.props.album)
        return (
            this.state.description ?
                <div className="mediaReviewCard" key={this.props.album.id}>
                    <div>
                        <ul>{this.props.album.month_day_played}/{this.props.album.year_played}</ul>
                        <ul><button onClick={() => this.setState({ description: !this.state.description })}>-</button> {this.props.album.name} ({this.props.album.year})</ul>
                        <ul>{this.props.album.artist}</ul>
                    </div>
                    <img src={albumPhotos[this.props.album.image]} alt={this.props.album.name} />
                    <p className="rating">Rating: {this.stars()}
                    </p>
                    <div>
                        <p>The Good: {this.props.album.notes}</p>
                        <p>The Could Be Better: {this.props.album.improve_notes}</p>
                    </div>
                </div>
                :
                <div className="mediaReviewList"><button onClick={() => this.setState({ description: !this.state.description })}>+</button> {this.props.album.month_day_played}/{this.props.album.year_played} - {this.props.album.name} ({this.props.album.year})</div>
        )
    }
}

export default AlbumReviewCard