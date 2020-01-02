import React, { Component } from 'react'
import BoardReviewCard from '../components/BoardReviewCard.js'
import BoardReviewSearch from '../components/BoardReviewSearch.js'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import BoardForm from '../components/BoardForm.js'

export class BoardContainer extends Component {

    state = { boardSearch: "", boardReviews: [], option: "All years", selectedYear: [] }

    componentDidMount() {
        fetch('http://localhost:3000/api/v1/boards')
            .then(response => response.json())
            .then(boards => this.setState({ boardReviews: boards.reverse(), selectedYear: boards }));
    }

    addNewBoard = function (board) {
        const newBoard = board
        this.setState({
            boardReviews: [newBoard, ...this.state.boardReviews],
            selectedYear: [newBoard, ...this.state.selectedYear],
        })
    }

    handleFormSubmit = (board) => {
        fetch('http://localhost:3000/api/v1/boards', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: board.name,
                month_day_played: board.monthPlayed,
                year_played: board.yearPlayed,
                notes: board.notes,
                year: board.year,
                rating: board.rating,
                image: board.image
            })
        }).then(response => response.json())
            .then(board => this.addNewBoard(board)
            )
    }

    searchBoard = (search) => {
        this.setState({ boardSearch: search })
    }

    filterBoards = () => {
        let filteredBoards = this.state.selectedYear.filter(board => board.name.toLowerCase().includes(this.state.boardSearch.toLowerCase()))
        return filteredBoards
    }

    changeYear = (event) => {
        let allBoards = this.state.boardReviews
        let yearsBoards = this.state.boardReviews.filter(board => board.year_played === event.value)
        if (event.value === "All years") {
            this.setState({ selectedYear: allBoards })
        }
        else if (event.value) {
            this.setState({ selectedYear: yearsBoards })
        }
    }

    render() {
        let years = this.state.boardReviews.map(board => board.year_played)
        let uniqueYears = [...new Set(years)]
        let options = ["All years", ...uniqueYears]
        let boardReviews = this.filterBoards().map(board => <BoardReviewCard key={board.id} board={board} />)
        return (
            <div className="mediaContainer">
                <h1 className="mediaHeader">Board Game Reviews</h1>
                <p>I enjoy getting together monthly with friends to play board games. Personal favorites are Dominion, Seven Wonders, Terra Mystica, Scythe, Power Grid, and Concordia. I'll leave reviews and comments of sessions.</p>
                <Dropdown options={options} className="mediaDropdown" onChange={this.changeYear} value={this.state.option} placeholder="Select an option" />
                <BoardForm handleFormSubmit={this.handleFormSubmit} />
                <BoardReviewSearch value={this.state.boardSearch} searchMovie={this.searchBoard} />
                {boardReviews}
            </div>
        )
    }
}

export default BoardContainer
