import React, { Component } from 'react'
import BoardGameHome from '../../components/mediahomes/BoardGameHome.js'
import BoardGameSidebar from '../../components/sidebars/BoardGameSidebar.js'
import BoardGameReviewCard from '../../components/cards/BoardGameReviewCard.js'
import { getBoardGames } from '../../components/actions/boardGameActions'
import { connect } from 'react-redux'
import './container.scss'

export class BoardContainer extends Component {

    state = { media: null }

    componentDidMount() {
        this.props.getBoardGames()
    }

    mediaClickHandler = (mediaClicked) => {
        window.scrollTo(0, 0)
        this.setState({ media: mediaClicked })
    }

    render() {
        const { boardGames } = this.props.boardGames
        const { media } = this.state
        return (
            <div className="mediaContainer">
                <div>
                    <BoardGameSidebar reviews={boardGames} mediaClickHandler={this.mediaClickHandler} />
                </div>
                <div className="mediaContent">
                    {media ? <BoardGameReviewCard key={media.id} board={media} /> : <BoardGameHome />}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    boardGames: state.boardGames
})

export default connect(mapStateToProps, { getBoardGames })(BoardContainer)