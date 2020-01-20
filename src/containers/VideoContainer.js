import React, { Component } from 'react'
import VideoReviewCard from '../components/VideoReviewCard.js'
import VideoReviewSearch from '../components/VideoReviewSearch.js'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { url } from '../config'
import util from '../util'

export class VideoContainer extends Component {

    state = { videoSearch: "", videoReviews: [], option: "All years", selectedYear: [] }

    componentDidMount() {
        fetch(`${url}/videos`)
            .then(response => response.json())
            .then(videos => this.setState({ videoReviews: videos.reverse(), selectedYear: videos }));
    }

    handleSearchTermChange = (search) => {
        this.setState({ videoSearch: search })
    }

    searchVideoGames = () => {
        return util.searchMedia(this.state.selectedYear, "name", this.state.videoSearch)
    }

    changeYear = (event) => {
        let allVideos = this.state.videoReviews
        let yearsVideos = this.state.videoReviews.filter(video => video.year_played === event.value)
        if (event.value === "All years") {
            this.setState({ selectedYear: allVideos, option: "All years" })
        }
        else if (event.value) {
            this.setState({ selectedYear: yearsVideos, option: event.value })
        }
    }

    render() {
        let years = this.state.videoReviews.map(video => video.year_played)
        let uniqueYears = [...new Set(years)]
        let options = ["All years", ...uniqueYears]
        let videoReviews = this.searchVideoGames().map(video => <VideoReviewCard key={video.id} video={video} />)
        return (
            <div className="mediaContainer">
                <h1 className="mediaHeader">Video Game Reviews</h1>
                <p>I enjoy replaying through video games. My favorites include Starcraft, Warcraft, Baldur's Gate, Sonic, Mario, and GoldenEye</p>
                <div className="mediaDropAndSearch">
                    <Dropdown className="mediaDropdown" options={options} onChange={this.changeYear} value={this.state.option} placeholder="Select an option" />
                    <VideoReviewSearch value={this.state.videoSearch} onChange={this.handleSearchTermChange} />
                </div>
                {videoReviews}
            </div>
        )
    }
}

export default VideoContainer
