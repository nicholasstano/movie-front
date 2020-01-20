import React, { Component } from 'react'

export class AlbumReviewSearch extends Component {
    render() {
        return (
            <div className="mediaReviewSearch">
                <form onSubmit={(event) => event.preventDefault()}>
                    <input type="text" className="mediaReviewSearchBox" placeholder="Search Albums" value={this.props.value} onChange={(event) => { this.props.onChange(event.target.value) }} />
                </form>
            </div>
        )
    }
}

export default AlbumReviewSearch