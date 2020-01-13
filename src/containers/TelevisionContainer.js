import React, { Component } from 'react'
import TVShowReviewCard from '../components/TVShowReviewCard.js'
import TVShowReviewSearch from '../components/TVShowReviewSearch.js'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import TVShowForm from '../components/TVShowForm.js'
import { url } from '../global/GlobalVariables.js'

export class TelevisionContainer extends Component {

    state = { tvSearch: "", tvReviews: [], option: "All years", selectedYear: [] }

    componentDidMount() {
        fetch(`${url}/tvshows`)
            .then(response => response.json())
            .then(shows => this.setState({ tvReviews: shows.reverse(), selectedYear: shows }));
    }

    addNew = function (show) {
        const newShow = show
        this.setState({
            tvReviews: [newShow, ...this.state.tvReviews],
            selectedYear: [newShow, ...this.state.selectedYear],
        })
    }

    handleFormSubmit = (show) => {
        fetch(`${url}/tvshows`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: show.name,
                month_day_watched: show.monthWatched,
                year_watched: show.yearWatched,
                notes: show.notes,
                year: show.year,
                rating: show.rating,
                image: show.image,
                season: show.season
            })
        }).then(response => response.json())
            .then(show => this.addNew(show)
            )
    }

    searchShow = (search) => {
        this.setState({ tvSearch: search })
    }

    filterShows = () => {
        let filteredShows = this.state.selectedYear.filter(show => show.name.toLowerCase().includes(this.state.tvSearch.toLowerCase()))
        return filteredShows
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
        let tvReviews = this.filterShows().map(show => <TVShowReviewCard key={show.id} show={show} />)
        return (
            <div className="mediaContainer">
                <h1 className="mediaHeader">TV Show Reviews</h1>
                <p>I am not too into watching TV. I prefer movies. I am intimidated by the idea of getting into a show that has 5 seasons and 60+ episodes. At times I will bingewatch shows on say Netflix.</p>
                <TVShowForm handleFormSubmit={this.handleFormSubmit} />
                <div className="mediaDropAndSearch">
                    <Dropdown className="mediaDropdown" options={options} onChange={this.changeYear} value={this.state.option} placeholder="Select an option" />
                    <TVShowReviewSearch value={this.state.tvSearch} searchShow={this.searchShow} />
                </div>
                {tvReviews}
            </div>
        )
    }
}

export default TelevisionContainer
