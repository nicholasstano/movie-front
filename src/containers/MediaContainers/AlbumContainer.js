import React, { useState, useEffect } from 'react'
import AlbumHome from '../../components/mediahomes/AlbumHome.js'
import AlbumSidebar from '../../components/sidebars/AlbumSidebar.js'
import AlbumReviewCard from '../../components/cards/AlbumReviewCard.js'
import { getAlbums } from '../../components/actions/albumActions'
import { connect } from 'react-redux'
import './container.scss'
// import PropTypes from 'prop-types'

const AlbumContainer = (props) => {
    const [media, setMedia] = useState(null)

    useEffect(() => {
        props.getAlbums()
    }, [])

    const mediaClickHandler = (mediaClicked) => {
        window.scrollTo(0, 0)
        setMedia(mediaClicked)
    }
    console.log(props)

    return (
        <div className="mediaContainer">
            <div>
                <AlbumSidebar reviews={props.albums.albums} mediaClickHandler={mediaClickHandler} />
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

const mapStateToProps = state => ({
    albums: state.albums
})

// AlbumContainer.propTypes = {
//     getAlbums: PropTypes.func.isRequired,
//     albums: PropTypes.object.isRequired
// }

export default connect(mapStateToProps, { getAlbums })(AlbumContainer)