import React, { Component } from 'react'

export class AlbumReviewCard extends Component {

    state = { description: false }

    stars = () => {
        let s = ""
        for (let i = 0; i < this.props.album.rating[0]; i++) {
            s = s + "⭑"
        }
        return s
    }

    render() {
        return (
            this.state.description ?
                <div className="mediaReviewCard" key={this.props.album.id}>
                    <div>
                        <ul>{this.props.album.month_day_played}/{this.props.album.year_played}</ul>
                        <ul><button onClick={() => this.setState({ description: !this.state.description })}>-</button> {this.props.album.name} ({this.props.album.year})</ul>
                        <ul>{this.props.album.artist}</ul>
                    </div>
                    <img src={this.props.album.image} alt={this.props.album.name} />
                    <p className="rating">Rating: {this.stars()}
                    </p>
                    <p>Notes: {this.props.album.notes}</p>
                </div>
                :
                <div className="mediaReviewList"><button onClick={() => this.setState({ description: !this.state.description })}>+</button> {this.props.album.month_day_played}/{this.props.album.year_played} - {this.props.album.name} ({this.props.album.year})</div>
        )
    }
}

export default AlbumReviewCard