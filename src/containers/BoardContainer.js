import BoardGameHome from '../components/mediahomes/BoardGameHome.js'
import BoardGameSidebar from '../components/sidebars/BoardGameSidebar.js'
import BoardGameReviewCard from '../components/cards/BoardGameReviewCard.js'
import React, { Component } from 'react'
import { url } from '../config'
import util from '../util'

export class BoardContainer extends Component {

    state = { boardReviews: [], media: null }

    componentDidMount() {
        fetch(`${url}/boards`)
            .then(response => response.json())
            .then(boards => {
                this.setState({
                    boardReviews: util.sortMediaById(boards)
                })
            });
    }

    mediaClickHandler = (mediaClicked) => {
        this.setState({ media: mediaClicked })
    }

    render() {
        return (
            <div className="mediaContainer font-weight-light">
                <div>
                    <BoardGameSidebar boardReviews={this.state.boardReviews} mediaClickHandler={this.mediaClickHandler} />
                </div>
                <div className="container-fluid">
                    {this.state.media ? <BoardGameReviewCard key={this.state.media.id} board={this.state.media} /> : <BoardGameHome />}
                </div>
            </div>
        )
    }
}

export default BoardContainer
