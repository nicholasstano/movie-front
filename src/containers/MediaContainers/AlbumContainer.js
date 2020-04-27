import AlbumHome from '../../components/mediahomes/AlbumHome.js'
import AlbumSidebar from '../../components/sidebars/AlbumSidebar.js'
import AlbumReviewCard from '../../components/cards/AlbumReviewCard.js'
import React, { useState, useEffect } from 'react'
import { url } from '../../config'
import util from '../../util'
import './container.scss'

const AlbumContainer = () => {
    const [mediaReviews, setMediaReviews] = useState([])
    const [media, setMedia] = useState(null)

    useEffect(() => {
        fetch(`${url}/albums`)
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
                <AlbumSidebar reviews={mediaReviews} mediaClickHandler={mediaClickHandler} />
            </div>
            <div className="mediaContent">
                {media ?
                    <AlbumReviewCard key={media.id} album={media} />
                    :
                    <AlbumHome />
                }
            </div>
        </div>
    )
}

export default AlbumContainer