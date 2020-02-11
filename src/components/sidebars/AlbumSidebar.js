import React, { Component } from 'react'
import MediaSearch from '../MediaSearch.js'
import 'react-dropdown/style.css'
import util from '../../util'

export class AlbumSidebar extends Component {

    state = { mediaSearch: "" }


    handleSearchTermChange = (search) => {
        this.setState({ mediaSearch: search })
    }

    searchMedia = () => {
        return util.searchMedia(this.props.albumReviews, "name", this.state.mediaSearch)
    }

    render() {
        let albumReviews = this.searchMedia().map(album => <div className="mediaTitleAlbums" key={album.id}><div onClick={() => this.props.mediaClickHandler(album)}>{album.name}<div className="monthDay">
            ({album.month_day_played}/{album.year_played})
            </div>
        </div></div>)
        return (
            <div className="mediaSidebar navbar-dark bg-dark">
                <div className="mediaSearch">
                    <MediaSearch value={this.state.albumSearch} onChange={this.handleSearchTermChange} mediaName={"Albums"} />
                </div>
                {albumReviews}
            </div>
        )
    }
}

export default AlbumSidebar