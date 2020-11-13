import React, { useState } from 'react'
import MediaSearch from './MediaSearch.js'
import util from '../../util'
import './sidebar.scss'

const SidebarTemplate = (reviews, mediaTitle, clickHandler) => {

    const [mediaSearch, setMediaSearch] = useState("")
    const [sidebarLeft, setSidebarLeft] = useState(true)

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
        <button className={mediaTitle} onClick={() => {
            setSidebarLeft(false)
            clickHandler(media)}}>
            {truncateMediaName(media.name)} {mediaTitle === "TV Shows" && <span>
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
        <div>
            <div className="toggleMediaReviews" style={{marginLeft: `${sidebarLeft ? '-300px': '1rem'}`}}>
                <button onClick={() => setSidebarLeft(true)}>
                    <p>View Media Reviews</p>
                </button>
            </div>
            <div className={sidebarLeft ? 'mediaSidebar open': 'mediaSidebar'}>
                <div className="mediaSearch">
                    <MediaSearch onChange={handleSearchTermChange} mediaName={mediaTitle} />
                    <button className="toggleButton" onClick={() => setSidebarLeft(false)}>
                        <div className="buttonLine"/> 
                        <div className="buttonLine"/>
                        <div className="buttonLine"/>
                    </button>
                </div>
                {mediaReviews.length ? mediaReviews : <div className="loading">Loading</div>}
            </div>
        </div>
    )
}

export default SidebarTemplate