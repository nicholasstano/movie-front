import React, { Component } from 'react'

export class MovieReviewSearch extends Component {
    render() {
        return (
            <div className="movieReviewSearch">
                <form onSubmit={(event) => event.preventDefault()}>
                    <input type="text" placeholder="search movies" value={this.props.value} onChange={(event) => { this.props.searchMovie(event.target.value) }} />
                </form>
            </div>
        )
    }
}

export default MovieReviewSearch