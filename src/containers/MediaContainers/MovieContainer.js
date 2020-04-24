import MovieHome from '../../components/mediahomes/MovieHome.js'
import MovieSidebar from '../../components/sidebars/MovieSidebar.js'
import MovieReviewCard from '../../components/cards/MovieReviewCard.js'
import React, { useState, useEffect } from 'react'
import { url } from '../../config'
import util from '../../util'
import './container.scss'

const MovieContainer = () => {
    const [mediaReviews, setMediaReviews] = useState([])
    const [media, setMedia] = useState(null)

    useEffect(() => {
        fetch(`${url}/movies`)
            .then(res => res.json())
            .then(media => setMediaReviews(util.sortMediaById(media)))
    }, [mediaReviews])

    const mediaClickHandler = (mediaClicked) => {
        window.scrollTo(0, 0)
        setMedia(mediaClicked)
    }
    return (
        <div className="mediaContainer">
            <div>
                <MovieSidebar reviews={mediaReviews} mediaClickHandler={mediaClickHandler} />
            </div>
            <div className="mediaContent">
                {media ? <MovieReviewCard key={media.id} movie={media} /> : <MovieHome />}
            </div>
        </div>
    )
}

export default MovieContainer