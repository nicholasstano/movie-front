import React, { Component } from 'react'
import MediaSearch from '../MediaSearch.js'
import 'react-dropdown/style.css'
import util from '../../util'

export class BoardGameSidebar extends Component {

    state = { mediaSearch: "" }


    handleSearchTermChange = (search) => {
        this.setState({ mediaSearch: search })
    }

    searchMedia = () => {
        return util.searchMedia(this.props.boardReviews, "name", this.state.mediaSearch)
    }

    render() {
        let boardGameReviews = this.searchMedia().map(bg => <div className="mediaTitles" key={bg.id}>
            <button onClick={() => this.props.mediaClickHandler(bg)}>{bg.name}
                <div className="monthDay">({bg.month_day_played}/{bg.year_played})</div>
            </button>
        </div>)
        return (
            <div className="mediaSidebar">
                <div className="mediaSearch">
                    <MediaSearch onChange={this.handleSearchTermChange} mediaName={"Board Games"} />
                </div>
                {boardGameReviews}
            </div>
        )
    }
}

export default BoardGameSidebar