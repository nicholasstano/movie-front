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
        let boardGameReviews = this.searchMedia().map(bg => <div className="mediaTitleBoardGames" key={bg.id}><div onClick={() => this.props.mediaClickHandler(bg)}>{bg.name}<div className="monthDay">
            ({bg.month_day_played}/{bg.year_played})
            </div>
        </div></div>)
        return (
            <div className="mediaSidebar navbar-dark bg-dark">
                <div className="mediaSearch">
                    <MediaSearch onChange={this.handleSearchTermChange} mediaName={"Board Games"} />
                </div>
                {boardGameReviews}
            </div>
        )
    }
}

export default BoardGameSidebar