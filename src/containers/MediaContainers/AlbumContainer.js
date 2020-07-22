import React, { Component } from 'react'
import AlbumHome from '../../components/mediahomes/AlbumHome.js'
import AlbumSidebar from '../../components/sidebars/AlbumSidebar.js'
import AlbumReviewCard from '../../components/cards/AlbumReviewCard.js'
import { getAlbums } from '../../components/actions/albumActions'
import { connect } from 'react-redux'
import './container.scss'
// import PropTypes from 'prop-types'

export class AlbumContainer extends Component {

    state = { media: null }

    componentDidMount() {
        this.props.getAlbums()
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

// AlbumContainer.propTypes = {
//     getAlbums: PropTypes.func.isRequired,
//     albums: PropTypes.object.isRequired
// }

export default connect(mapStateToProps, { getAlbums })(AlbumContainer)