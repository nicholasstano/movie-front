import React, { Component } from 'react'
import { connect } from 'react-redux'
import BoardGameHome from '../../components/mediahomes/BoardGameHome.js'
import BoardGameSidebar from '../../components/sidebars/BoardGameSidebar.js'
import BoardGameReviewCard from '../../components/cards/BoardGameReviewCard.js'
import { getMedia } from '../../components/actions/mediaActions'
import { GET_BOARD_GAMES } from '../../components/actions/types'
import './container.scss'

export class BoardContainer extends Component {

    state = { media: null }

    componentDidMount() {
        this.props.getMedia("boards", GET_BOARD_GAMES)
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

export default connect(mapStateToProps, { getMedia })(BoardContainer)