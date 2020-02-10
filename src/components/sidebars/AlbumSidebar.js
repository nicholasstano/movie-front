import React, { Component } from 'react'
import MediaSearch from '../MediaSearch.js'
import 'react-dropdown/style.css'
import util from '../../util'

export class AlbumSidebar extends Component {

    state = { albumSearch: "" }


    handleSearchTermChange = (search) => {
        this.setState({ albumSearch: search })
    }

    searchAlbums = () => {
        return util.searchMedia(this.props.albumReviews, "name", this.state.albumSearch)
    }

    render() {
        let albumReviews = this.searchAlbums().map(album => <div key={album.id}><p onClick={() => this.props.albumClickHandler(album)}>{album.month_day_played}/{album.year_played} {album.name}</p></div>)
        return (
            <div className="mediaSidebar">
                <div className="mediaSearch">
                    <MediaSearch value={this.state.albumSearch} onChange={this.handleSearchTermChange} mediaName={"Albums"} />
                </div>
                {albumReviews}
            </div>
        )
    }
}

export default AlbumSidebar
