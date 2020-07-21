import React, { useState, useEffect } from 'react'
import BoardGameHome from '../../components/mediahomes/BoardGameHome.js'
import BoardGameSidebar from '../../components/sidebars/BoardGameSidebar.js'
import BoardGameReviewCard from '../../components/cards/BoardGameReviewCard.js'
import { getBoardGames } from '../../components/actions/boardGameActions'
import { connect } from 'react-redux'
import './container.scss'

const BoardContainer = (props) => {
    const [media, setMedia] = useState(null)

    useEffect(() => {
        props.getBoardGames()
    }, [])

    const mediaClickHandler = (mediaClicked) => {
        window.scrollTo(0, 0)
        setMedia(mediaClicked)
    }
    console.log(props)
    return (
        <div className="mediaContainer">
            <div>
                <BoardGameSidebar reviews={props.boardGames.boardGames} mediaClickHandler={mediaClickHandler} />
            </div>
            <div className="mediaContent">
                {media ? <BoardGameReviewCard key={media.id} board={media} /> : <BoardGameHome />}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    boardGames: state.boardGames
})

export default connect(mapStateToProps, { getBoardGames })(BoardContainer)