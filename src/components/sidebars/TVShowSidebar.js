import React, { Component } from 'react'
import MediaSearch from '../MediaSearch.js'
import 'react-dropdown/style.css'
import util from '../../util'

export class TVShowSidebar extends Component {

    state = { mediaSearch: "" }


    handleSearchTermChange = (search) => {
        this.setState({ mediaSearch: search })
    }

    searchMedia = () => {
        return util.searchMedia(this.props.tvReviews, "name", this.state.mediaSearch)
    }

    render() {
        let tvReviews = this.searchMedia().map(tv => <div className="mediaTitleTVShows" key={tv.id}><div onClick={() => this.props.mediaClickHandler(tv)}>{tv.name} Season {tv.season}<div className="monthDay">
            ({tv.month_day_watched}/{tv.year_watched})
            </div>
        </div></div>)
        return (
            <div className="mediaSidebar">
                <div className="mediaSearch">
                    <MediaSearch onChange={this.handleSearchTermChange} mediaName={"TV Shows"} />
                </div>
                {tvReviews}
            </div>
        )
    }
}

export default TVShowSidebar