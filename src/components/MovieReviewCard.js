import React, { Component } from 'react'

export class MovieReviewCard extends Component {

    state = { description: false }

    stars = () => {
        let s = ""
        for (let i = 0; i < this.props.movie.rating[0]; i++) {
            s = s + "⭑"
        }
        return s
    }

    render() {
        return (
            this.state.description ?
                <div className="mediaReviewCard" key={this.props.movie.id}>
                    <div>
                        <ul>{this.props.movie.month_day_watched}/{this.props.movie.year_watched}</ul>
                        <ul><button onClick={() => this.setState({ description: !this.state.description })}>-</button> {this.props.movie.name} ({this.props.movie.year})</ul>
                        <ul>{this.props.movie.director}</ul>
                    </div>
                    <img src={this.props.movie.image} alt={this.props.movie.name} />
                    <p className="rating">Rating: {this.stars()}
                    </p>
                    <p>Notes: {this.props.movie.notes}</p>
                </div>
                :
                <div className="mediaReviewList"><button onClick={() => this.setState({ description: !this.state.description })}>+</button> {this.props.movie.month_day_watched}/{this.props.movie.year_watched} - {this.props.movie.name}</div>
        )
    }
}

export default MovieReviewCard