import React, { Component } from 'react'
import AlbumReviewCard from '../components/cards/AlbumReviewCard.js'
import MediaSearch from '../components/MediaSearch.js'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { url } from '../config'
import util from '../util'
import photos from '../photos/favorites'

export class AlbumContainer extends Component {

    state = { albumSearch: "", albumReviews: [], option: "All years", selectedYear: [] }

    componentDidMount() {
        fetch(`${url}/albums`)
            .then(response => response.json())
            .then(albums => this.setState({ albumReviews: albums.reverse(), selectedYear: albums }));
    }

    handleSearchTermChange = (search) => {
        this.setState({ albumSearch: search })
    }

    searchAlbums = () => {
        return util.searchMedia(this.state.selectedYear, "name", this.state.albumSearch)
    }

    changeYear = (event) => {
        let allAlbums = this.state.albumReviews
        let yearsAlbums = this.state.albumReviews.filter(album => album.year_played === event.value)
        if (event.value === "All years") {
            this.setState({ selectedYear: allAlbums, option: "All years" })
        }
        else if (event.value) {
            this.setState({ selectedYear: yearsAlbums, option: event.value })
        }
    }

    render() {
        let years = this.state.albumReviews.map(album => album.year_played)
        let uniqueYears = [...new Set(years)]
        let options = ["All years", ...uniqueYears]
        let albumReviews = this.searchAlbums().map(album => <AlbumReviewCard key={album.id} album={album} />)
        let favoriteFiveAlbums = photos.albums.map((album, index) =>
            <div className="mediaFavoriteFiveSingle" key={album}>
                <img src={album} alt={album} />
            </div>)
        return (
            <div className="mediaContainer">
                <h1 className="mediaHeader">Album Reviews</h1>
                <div className="mediaFavoriteFive">{favoriteFiveAlbums}</div>
                <p>Chris Jericho defines a perfect album as one where every song is an A or better. I believe a perfect album is an album that you throw on and skip no tracks. I guess that's the same thing.</p>
                <div className="mediaDropAndSearch">
                    <Dropdown options={options} className="mediaDropdown" onChange={this.changeYear} value={this.state.option} placeholder="Select an option" />
                    <MediaSearch value={this.state.albumSearch} onChange={this.handleSearchTermChange} mediaName={"Albums"} />
                </div>
                {albumReviews}
            </div>
        )
    }
}

export default AlbumContainer
