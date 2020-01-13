import React, { Component } from 'react'

export class VideoReviewCard extends Component {

    state = { description: false }

    stars = () => {
        let s = ""
        for (let i = 0; i < this.props.video.rating[0]; i++) {
            s = s + "⭑"
        }
        return s
    }

    render() {
        return (
            this.state.description ?
                <div className="mediaReviewCard" key={this.props.video.id}>
                    <div>
                        <ul>{this.props.video.month_day_played}/{this.props.video.year_played}</ul>
                        <ul><button onClick={() => this.setState({ description: !this.state.description })}>-</button> {this.props.video.name} ({this.props.video.year})</ul>
                    </div>
                    <img src={this.props.video.image} alt={this.props.video.name} />
                    <p className="rating">Rating: {this.stars()}
                    </p>
                    <p>Notes: {this.props.video.notes}</p>
                </div>
                :
                <div className="mediaReviewList"><button onClick={() => this.setState({ description: !this.state.description })}>+</button> {this.props.video.month_day_played}/{this.props.video.year_played} - {this.props.video.name} ({this.props.video.year})</div>
        )
    }
}

export default VideoReviewCard