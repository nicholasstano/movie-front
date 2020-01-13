import React, { Component } from 'react'
import VideoReviewCard from '../components/VideoReviewCard.js'
import VideoReviewSearch from '../components/VideoReviewSearch.js'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import VideoForm from '../components/VideoForm.js'
import { url } from '../global/GlobalVariables.js'

export class VideoContainer extends Component {

    state = { videoSearch: "", videoReviews: [], option: "All years", selectedYear: [] }

    componentDidMount() {
        fetch(`${url}/videos`)
            .then(response => response.json())
            .then(videos => this.setState({ videoReviews: videos.reverse(), selectedYear: videos }));
    }

    addNew = function (video) {
        const newVideo = video
        this.setState({
            videoReviews: [newVideo, ...this.state.videoReviews],
            selectedYear: [newVideo, ...this.state.selectedYear],
        })
    }

    handleFormSubmit = (video) => {
        fetch(`${url}/videos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: video.name,
                month_day_played: video.monthPlayed,
                year_played: video.yearPlayed,
                notes: video.notes,
                year: video.year,
                rating: video.rating,
                image: video.image
            })
        }).then(response => response.json())
            .then(video => this.addNew(video)
            )
    }

    searchVideo = (search) => {
        this.setState({ videoSearch: search })
    }

    filterVideos = () => {
        let filteredVideos = this.state.selectedYear.filter(video => video.name.toLowerCase().includes(this.state.videoSearch.toLowerCase()))
        return filteredVideos
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
        let videoReviews = this.filterVideos().map(video => <VideoReviewCard key={video.id} video={video} />)
        return (
            <div className="mediaContainer">
                <h1 className="mediaHeader">Video Game Reviews</h1>
                <p>I enjoy replaying through video games. My favorites include Starcraft, Warcraft, Baldur's Gate, Sonic, Mario, and GoldenEye</p>
                <VideoForm handleFormSubmit={this.handleFormSubmit} />
                <div className="mediaDropAndSearch">
                    <Dropdown className="mediaDropdown" options={options} onChange={this.changeYear} value={this.state.option} placeholder="Select an option" />
                    <VideoReviewSearch value={this.state.videoSearch} searchVideo={this.searchVideo} />
                </div>
                {videoReviews}
            </div>
        )
    }
}

export default VideoContainer
