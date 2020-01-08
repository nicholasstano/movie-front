import React, { Component } from 'react'
import AlbumReviewCard from '../components/AlbumReviewCard.js'
import AlbumReviewSearch from '../components/AlbumReviewSearch.js'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import AlbumForm from '../components/AlbumForm.js'

export class AlbumContainer extends Component {

    state = { albumSearch: "", albumReviews: [], option: "All years", selectedYear: [] }

    componentDidMount() {
        fetch('http://localhost:3000/api/v1/albums')
            .then(response => response.json())
            .then(albums => this.setState({ albumReviews: albums.reverse(), selectedYear: albums }));
    }

    addNewAlbum = function (album) {
        const newAlbum = album
        this.setState({
            albumReviews: [newAlbum, ...this.state.albumReviews],
            selectedYear: [newAlbum, ...this.state.selectedYear],
        })
    }

    handleFormSubmit = (album) => {
        fetch('http://localhost:3000/api/v1/albums', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: album.name,
                artist: album.name,
                month_day_played: album.monthPlayed,
                year_played: album.yearPlayed,
                notes: album.notes,
                year: album.year,
                rating: album.rating,
                image: album.image
            })
        }).then(response => response.json())
            .then(album => this.addNewAlbum(album)
            )
    }

    searchAlbum = (search) => {
        this.setState({ albumSearch: search })
    }

    filterAlbums = () => {
        let filteredAlbums = this.state.selectedYear.filter(album => album.name.toLowerCase().includes(this.state.albumSearch.toLowerCase()))
        return filteredAlbums
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
        let albumReviews = this.filterAlbums().map(album => <AlbumReviewCard key={album.id} album={album} />)
        return (
            <div className="mediaContainer">
                <h1 className="mediaHeader">Album Reviews</h1>
                <p>Chris Jericho defines a 5 star or perfect album as an album where every song is an A or better. I believe a 5 star album is an album that you throw on and skip no tracks. Any recommendations? Some favorites include Safe As Milk, Arthur (Or the Decline and Fall of the British Empire), Hot Rats, Sticky Fingers to name a few.</p>
                <AlbumForm handleFormSubmit={this.handleFormSubmit} />
                <div className="mediaDropAndSearch">
                    <Dropdown options={options} className="mediaDropdown" onChange={this.changeYear} value={this.state.option} placeholder="Select an option" />
                    <AlbumReviewSearch value={this.state.albumSearch} searchAlbum={this.searchAlbum} />
                </div>
                {albumReviews}
            </div>
        )
    }
}

export default AlbumContainer
