import React, { Component } from 'react'

export class MediaSearch extends Component {

    text = () => {
        return `Search ${this.props.mediaName}`
    }

    render() {
        return (
            <div className="mediaReviewSearch">
                <form onSubmit={(event) => event.preventDefault()}>
                    <input type="text" className="mediaReviewSearchBox" placeholder={this.text()} value={this.props.value} onChange={(event) => { this.props.onChange(event.target.value) }} />
                </form>
            </div>
        )
    }
}

export default MediaSearch