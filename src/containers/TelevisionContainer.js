import React, { Component } from 'react'
import TVShowReviewCard from '../components/TVShowReviewCard.js'
import MediaSearch from '../components/MediaSearch.js'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { url } from '../config'
import util from '../util'
import photos from '../photos/favorites'

export class TelevisionContainer extends Component {

    state = { tvSearch: "", tvReviews: [], option: "All years", selectedYear: [] }

    componentDidMount() {
        fetch(`${url}/tvshows`)
            .then(response => response.json())
            .then(shows => this.setState({ tvReviews: shows.reverse(), selectedYear: shows }));
    }

    handleSearchTermChange = (search) => {
        this.setState({ tvSearch: search })
    }

    searchShows = () => {
        return util.searchMedia(this.state.selectedYear, "name", this.state.tvSearch)
    }

    changeYear = (event) => {
        let allShows = this.state.tvReviews
        let yearsShows = this.state.tvReviews.filter(show => show.year_watched === event.value)
        if (event.value === "All years") {
            this.setState({ selectedYear: allShows, option: "All years" })
        }
        else if (event.value) {
            this.setState({ selectedYear: yearsShows, option: event.value })
        }
    }

    render() {
        let years = this.state.tvReviews.map(show => show.year_watched)
        let uniqueYears = [...new Set(years)]
        let options = ["All years", ...uniqueYears]
        let tvReviews = this.searchShows().map(show => <TVShowReviewCard key={show.id} show={show} />)
        let favoriteTVShows = photos.tvShows.map((show, index) =>
            <div key={show}>
                <p>{index + 1}</p>
                <img src={show} alt={show} />
            </div>)
        return (
            <div className="mediaContainer">
                <h1 className="mediaHeader">TV Show Reviews</h1>
                <div className="mediaFavoriteFive">{favoriteTVShows}</div>
                <p>Bad taste in TV shows? Probably. It is the type of media I visit the least.</p>
                <div className="mediaDropAndSearch">
                    <Dropdown className="mediaDropdown" options={options} onChange={this.changeYear} value={this.state.option} placeholder="Select an option" />
                    <MediaSearch value={this.state.tvSearch} onChange={this.handleSearchTermChange} mediaName={"TV Shows"} />
                </div>
                {tvReviews}
            </div>
        )
    }
}

export default TelevisionContainer
