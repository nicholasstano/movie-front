import React, { Component } from 'react'
import StarRatingComponent from 'react-star-rating-component';

export class MovieReviewCard extends Component {

    stars = () => {
        let s = ""
        for (let i = 0; i < this.props.movie.rating[0]; i++) {
            s = s + "⭑"
        }
        return s
    }

    render() {
        return (
            <div className="movieReviews" key={this.props.movie.id}>
                <div className="movieReviewsTop">
                    <p>Watched on {this.props.movie.month_day_watched}/{this.props.movie.year_watched} -----> {this.props.movie.name} directed by {this.props.movie.director} ({this.props.movie.year})</p>
                </div>
                <div className="movieReviewsPosterRatingNotes">
                    <img src={this.props.movie.image} alt={this.props.movie.name} />
                    <p>Rating: {this.stars()}
                    </p>
                    <p>Notes: {this.props.movie.notes}</p>
                </div>
            </div>
        )
    }
}

export default MovieReviewCard