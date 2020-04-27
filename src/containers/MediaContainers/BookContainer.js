import BookHome from '../../components/mediahomes/BookHome.js'
import BookSidebar from '../../components/sidebars/BookSidebar.js'
import BookReviewCard from '../../components/cards/BookReviewCard.js'
import React, { useState, useEffect } from 'react'
import { url } from '../../config'
import util from '../../util'
import './container.scss'

const BookContainer = () => {
    const [mediaReviews, setMediaReviews] = useState([])
    const [media, setMedia] = useState(null)

    useEffect(() => {
        fetch(`${url}/books`)
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
                <BookSidebar reviews={mediaReviews} mediaClickHandler={mediaClickHandler} />
            </div>
            <div className="mediaContent">
                {media ? <BookReviewCard key={media.id} book={media} /> : <BookHome />}
            </div>
        </div>
    )
}

export default BookContainer