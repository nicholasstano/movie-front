import React, { Component } from 'react'

export class BoardReviewCard extends Component {

    state = { description: false }

    stars = () => {
        let s = ""
        for (let i = 0; i < this.props.board.rating[0]; i++) {
            s = s + "⭑"
        }
        return s
    }

    render() {
        return (
            this.state.description ?
                <div className="mediaReviewCard" key={this.props.board.id}>
                    <div>
                        <ul>{this.props.board.month_day_played}/{this.props.board.year_played}</ul>
                        <ul><button onClick={() => this.setState({ description: !this.state.description })}>-</button> {this.props.board.name} ({this.props.board.year})</ul>
                    </div>
                    <img src={this.props.board.image} alt={this.props.board.name} />
                    <p className="rating">Rating: {this.stars()}
                    </p>
                    <p>Notes: {this.props.board.notes}</p>
                </div>
                :
                <div className="mediaReviewList"><button onClick={() => this.setState({ description: !this.state.description })}>+</button> {this.props.board.month_day_played}/{this.props.board.year_played} - {this.props.board.name}</div>
        )
    }
}

export default BoardReviewCard