import React, { Component } from 'react'

export class BoardForm extends Component {

    state = {
        monthPlayed: "",
        yearPlayed: "",
        name: "",
        notes: "",
        year: "",
        rating: "",
        image: ""
    }

    handleBoardReviewChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleBoardReviewSubmit = event => {
        event.preventDefault()
        this.props.handleFormSubmit(this.state)
        this.setState({
            monthPlayed: "",
            yearPlayed: "",
            name: "",
            notes: "",
            year: "",
            rating: "",
            image: ""
        })
    }

    render() {
        return (
            <form className="mediaForm" onSubmit={this.handleBoardReviewSubmit}>
                <ul>
                    <label>Month/Day <input type="text" name="monthPlayed" value={this.state.monthPlayed} placeholder="01/19" onChange={this.handleBoardReviewChange} />
                    </label>
                </ul>
                <ul>
                    <label>Year Played <input type="text" name="yearPlayed" value={this.state.yearPlayed} placeholder="2018" onChange={this.handleBoardReviewChange} />
                    </label>
                </ul>
                <ul>
                    <label>Name <input type="text" name="name" value={this.state.name} placeholder="Terra Mystica" onChange={this.handleBoardReviewChange} />
                    </label>
                </ul>
                <ul>
                    <label>Year Released <input type="text" name="year" value={this.state.year} placeholder="2012" onChange={this.handleBoardReviewChange} />
                    </label>
                </ul>
                <ul>
                    <label>Game Image <input type="text" name="image" value={this.state.image} placeholder="https://cf.geekdo-images.com/itemrep/img/zm6mWUEYg2Yco_sJpjmN1DBZZv8=/fit-in/246x300/pic1356616.jpg" onChange={this.handleBoardReviewChange} />
                    </label>
                </ul>
                <ul>
                    <label>Rating <input type="text" name="rating" value={this.state.rating} placeholder="5/5" onChange={this.handleBoardReviewChange} />
                    </label>
                </ul>
                <ul>
                    <label>Notes <textarea name="notes" value={this.state.notes} placeholder="(Un)worthy Game Notes" onChange={this.handleBoardReviewChange} />
                    </label>
                </ul>
                <ul>
                    <button>Submit</button>
                </ul>
            </form>
        )
    }
}

export default BoardForm