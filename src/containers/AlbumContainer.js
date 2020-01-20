import React, { Component } from 'react'
import AlbumReviewCard from '../components/AlbumReviewCard.js'
import AlbumReviewSearch from '../components/AlbumReviewSearch.js'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { url } from '../config'
import util from '../util'

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
        return (
            <div className="mediaContainer">
                <h1 className="mediaHeader">Album Reviews</h1>
                <p>Chris Jericho defines a perfect album as one where every song is an A or better. I believe a perfect album is an album that you throw on and skip no tracks. Recommendations? My favorites include Safe As Milk, Arthur (Or the Decline and Fall of the British Empire), Hot Rats, and Sticky Fingers.</p>
                <div className="mediaDropAndSearch">
                    <Dropdown options={options} className="mediaDropdown" onChange={this.changeYear} value={this.state.option} placeholder="Select an option" />
                    <AlbumReviewSearch value={this.state.albumSearch} onChange={this.handleSearchTermChange} />
                </div>
                {albumReviews}
            </div>
        )
    }
}

export default AlbumContainer
