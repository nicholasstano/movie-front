import React, { Component } from 'react'
import tvPhotos from '../photos/tvshows'


export class TVShowReviewCard extends Component {

    state = { description: false }

    stars = () => {
        let s = ""
        for (let i = 0; i < this.props.show.rating[0]; i++) {
            s = s + "⭑"
        }
        return s
    }

    render() {
        return (
            this.state.description ?
                <div className="mediaReviewCard" key={this.props.show.id}>
                    <div>
                        <ul>{this.props.show.month_day_watched}/{this.props.show.year_watched}</ul>
                        <ul><button onClick={() => this.setState({ description: !this.state.description })}>-</button> {this.props.show.name} ({this.props.show.year})</ul>
                        <ul>Season {this.props.show.season}</ul>
                    </div>
                    <img src={tvPhotos[this.props.show.image]} alt={this.props.show.name} />
                    <p className="rating">Rating: {this.stars()}
                    </p>
                    <p>Notes: {this.props.show.notes}</p>
                </div>
                :
                <div className="mediaReviewList"><button onClick={() => this.setState({ description: !this.state.description })}>+</button> {this.props.show.month_day_watched}/{this.props.show.year_watched} - {this.props.show.name} Season {this.props.show.season} ({this.props.show.year})</div>
        )
    }
}

export default TVShowReviewCard