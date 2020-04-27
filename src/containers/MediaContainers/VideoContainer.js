import VideoGameHome from '../../components/mediahomes/VideoGameHome.js'
import VideoGameSidebar from '../../components/sidebars/VideoGameSidebar.js'
import VideoGameReviewCard from '../../components/cards/VideoGameReviewCard.js'
import React, { useEffect, useState } from 'react'
import { url } from '../../config'
import util from '../../util'
import './container.scss'

const VideoContainer = () => {
    const [mediaReviews, setMediaReviews] = useState([])
    const [media, setMedia] = useState(null)

    useEffect(() => {
        fetch(`${url}/videos`)
            .then(res => res.json())
            .then(media => setMediaReviews(util.sortMediaById(media)))
    }, [])

    const mediaClickHandler = (mediaClicked) => {
        window.scrollTo(0, 0)
        setMedia(mediaClicked)
    }
    return (
        <div className="mediaContainer">
            <div>
                <VideoGameSidebar reviews={mediaReviews} mediaClickHandler={mediaClickHandler} />
            </div>
            <div className="mediaContent">
                {media ? <VideoGameReviewCard key={media.id} videoGame={media} /> : <VideoGameHome />}
            </div>
        </div>
    )
}

export default VideoContainer