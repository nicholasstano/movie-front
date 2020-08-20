import React, { Component } from 'react'
import { connect } from 'react-redux'
import AlbumHome from '../../components/mediahomes/AlbumHome.js'
import AlbumSidebar from '../../components/sidebars/AlbumSidebar.js'
import AlbumReviewCard from '../../components/cards/AlbumReviewCard.js'
import { getMedia } from '../../components/actions/mediaActions'
import { GET_ALBUMS } from '../../components/actions/types'
import './container.scss'

export class AlbumContainer extends Component {

    state = { media: null }

    componentDidMount() {
        this.props.getMedia("albums", GET_ALBUMS)
    }

    mediaClickHandler = (mediaClicked) => {
        window.scrollTo(0, 0)
        this.setState({ media: mediaClicked })
    }

    render() {
        const { albums } = this.props.albums
        const { media } = this.state
        return (
            <div className="mediaContainer">
                <div>
                    <AlbumSidebar reviews={albums} mediaClickHandler={this.mediaClickHandler} />
                </div>
                <div className="mediaContent">
                    {media ? <AlbumReviewCard key={media.id} album={media} /> : <AlbumHome />}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    albums: state.albums
})

export default connect(mapStateToProps, { getMedia })(AlbumContainer)