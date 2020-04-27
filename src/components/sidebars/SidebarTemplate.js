import React, { useState } from 'react'
import MediaSearch from '../MediaSearch.js'
import 'react-dropdown/style.css'
import util from '../../util'
import './sidebar.css'

const SidebarTemplate = (reviews, mediaTitle, clickHandler) => {

    const [mediaSearch, setMediaSearch] = useState("")

    const handleSearchTermChange = (search) => {
        setMediaSearch(search)
    }

    const searchMedia = () => {
        return util.searchMedia(reviews, "name", mediaSearch)
    }

    const truncateMediaName = (name) => {
        if (name.length > 25) {
            return name.slice(0, 28) + '...'
        }
        else {
            return name
        }
    }

    let mediaReviews = searchMedia().map(media => <div className="mediaTitles" key={media.id}>
        <button className={mediaTitle} onClick={() => clickHandler(media)}>{truncateMediaName(media.name)} {mediaTitle === "TV Shows" && <span>
            ({media.season})
        </span>}
            {(mediaTitle === "Albums" || mediaTitle === "Board Games" || mediaTitle === "Video Games") &&
                <div className="monthDay">({media.month_day_played}/{media.year_played})</div>}
            {mediaTitle === "Books" &&
                <div className="monthDay">({media.month_day_read}/{media.year_read})</div>}
            {(mediaTitle === "Movies" || mediaTitle === "TV Shows") &&
                <div className="monthDay">({media.month_day_watched}/{media.year_watched})</div>}
        </button>
    </div>)


    return (
        <div className="mediaSidebar">
            <div className="mediaSearch">
                <MediaSearch onChange={handleSearchTermChange} mediaName={mediaTitle} />
            </div>
            {mediaReviews.length ? mediaReviews : <div>Loading</div>}
        </div>
    )
}

export default SidebarTemplate