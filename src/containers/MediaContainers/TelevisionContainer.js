import TVShowHome from '../../components/mediahomes/TVShowHome.js'
import TVShowSidebar from '../../components/sidebars/TVShowSidebar.js'
import TVShowReviewCard from '../../components/cards/TVShowReviewCard.js'
import React, { useEffect, useState } from 'react'
import { url } from '../../config'
import util from '../../util'
import './container.scss'

const TelevisionContainer = () => {
    const [mediaReviews, setMediaReviews] = useState([])
    const [media, setMedia] = useState(null)

    useEffect(() => {
        fetch(`${url}/tvshows`)
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
                <TVShowSidebar reviews={mediaReviews} mediaClickHandler={mediaClickHandler} />
            </div>
            <div className="mediaContent">
                {media ? <TVShowReviewCard key={media.id} tvshow={media} /> : <TVShowHome />}
            </div>
        </div>
    )
}

export default TelevisionContainer