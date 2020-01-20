import React, { Component } from 'react'

export class BoardReviewSearch extends Component {
    render() {
        return (
            <div className="mediaReviewSearch">
                <form onSubmit={(event) => event.preventDefault()}>
                    <input type="text" className="mediaReviewSearchBox" placeholder="Search Board Games" value={this.props.value} onChange={(event) => { this.props.onChange(event.target.value) }} />
                </form>
            </div>
        )
    }
}

export default BoardReviewSearch