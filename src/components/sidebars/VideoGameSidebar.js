import React, { Component } from 'react'
import MediaSearch from '../MediaSearch.js'
import 'react-dropdown/style.css'
import util from '../../util'

export class VideoGameSidebar extends Component {

    state = { mediaSearch: "" }


    handleSearchTermChange = (search) => {
        this.setState({ mediaSearch: search })
    }

    searchMedia = () => {
        return util.searchMedia(this.props.videoGameReviews, "name", this.state.mediaSearch)
    }

    render() {
        let videoGameReviews = this.searchMedia().map(vg => <div className="mediaTitles" key={vg.id}>
            <button onClick={() => this.props.mediaClickHandler(vg)}>{vg.name}
                <div className="monthDay">({vg.month_day_played}/{vg.year_played})</div>
            </button>
        </div>)
        return (
            <div className="mediaSidebar">
                <div className="mediaSearch">
                    <MediaSearch onChange={this.handleSearchTermChange} mediaName={"Video Games"} />
                </div>
                {videoGameReviews}
            </div>
        )
    }
}

export default VideoGameSidebar