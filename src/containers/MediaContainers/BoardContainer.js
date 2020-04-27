import BoardGameHome from '../../components/mediahomes/BoardGameHome.js'
import BoardGameSidebar from '../../components/sidebars/BoardGameSidebar.js'
import BoardGameReviewCard from '../../components/cards/BoardGameReviewCard.js'
import React, { useState, useEffect } from 'react'
import { url } from '../../config'
import util from '../../util'
import './container.scss'

const BoardContainer = () => {
    const [mediaReviews, setMediaReviews] = useState([])
    const [media, setMedia] = useState(null)

    useEffect(() => {
        fetch(`${url}/boards`)
            .then(response => response.json())
            .then(media => setMediaReviews(util.sortMediaById(media)))
    }, [])

    const mediaClickHandler = (mediaClicked) => {
        window.scrollTo(0, 0)
        setMedia(mediaClicked)
    }
    return (
        <div className="mediaContainer">
            <div>
                <BoardGameSidebar reviews={mediaReviews} mediaClickHandler={mediaClickHandler} />
            </div>
            <div className="mediaContent">
                {media ? <BoardGameReviewCard key={media.id} board={media} /> : <BoardGameHome />}
            </div>
        </div>
    )
}

export default BoardContainer