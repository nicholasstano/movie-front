import React, { Component } from 'react'
import MediaSearch from '../MediaSearch.js'
import 'react-dropdown/style.css'
import util from '../../util'
import './sidebar.css'

export class AlbumSidebar extends Component {

    state = { mediaSearch: "" }

    handleSearchTermChange = (search) => {
        this.setState({ mediaSearch: search })
    }

    searchMedia = () => {
        return util.searchMedia(this.props.reviews, "name", this.state.mediaSearch)
    }

    render() {
        let mediaReviews = this.searchMedia().map(media => <div className="mediaTitles" key={media.id}>
            <button onClick={() => this.props.mediaClickHandler(media)}>{media.name}
                <div className="monthDay">({media.month_day_played}/{media.year_played})</div>
            </button>
        </div>)
        return (
            <div className="mediaSidebar">
                <div className="mediaSearch">
                    <MediaSearch onChange={this.handleSearchTermChange} mediaName={"Albums"} />
                </div>
                {mediaReviews}
            </div>
        )
    }
}

export default AlbumSidebar
