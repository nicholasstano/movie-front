import React, { Component } from 'react'
import BoardReviewCard from '../components/BoardReviewCard.js'
import BoardReviewSearch from '../components/BoardReviewSearch.js'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { url } from '../config'
import util from '../util'

export class BoardContainer extends Component {

    state = { boardSearch: "", boardReviews: [], option: "All years", selectedYear: [] }

    componentDidMount() {
        fetch(`${url}/boards`)
            .then(response => response.json())
            .then(boards => this.setState({ boardReviews: boards.reverse(), selectedYear: boards }));
    }

    handleSearchTermChange = (search) => {
        this.setState({ boardSearch: search })
    }

    searchBoards = () => {
        return util.searchMedia(this.state.selectedYear, "name", this.state.boardSearch)
    }

    changeYear = (event) => {
        let allBoards = this.state.boardReviews
        let yearsBoards = this.state.boardReviews.filter(board => board.year_played === event.value)
        if (event.value === "All years") {
            this.setState({ selectedYear: allBoards, option: "All years" })
        }
        else if (event.value) {
            this.setState({ selectedYear: yearsBoards, option: event.value })
        }
    }

    render() {
        let years = this.state.boardReviews.map(board => board.year_played)
        let uniqueYears = [...new Set(years)]
        let options = ["All years", ...uniqueYears]
        let boardReviews = this.searchBoards().map(board => <BoardReviewCard key={board.id} board={board} />)
        return (
            <div className="mediaContainer">
                <h1 className="mediaHeader">Board Game Sessions</h1>
                <p>Attempting to get together with friends at least monthly. Easier said than done! My favorites include Dominion, Seven Wonders, Terra Mystica, Scythe, Power Grid, and Concordia. Session notes below!</p>
                <div className="mediaDropAndSearch">
                    <Dropdown options={options} className="mediaDropdown" onChange={this.changeYear} value={this.state.option} placeholder="Select an option" />
                    <BoardReviewSearch value={this.state.boardSearch} onChange={this.handleSearchTermChange} />
                </div>
                {boardReviews}
            </div>
        )
    }
}

export default BoardContainer
