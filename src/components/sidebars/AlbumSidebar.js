import SidebarTemplate from './SidebarTemplate.js'

const AlbumSidebar = (props) => {

    const { reviews, mediaClickHandler } = props

    return (
        SidebarTemplate(reviews, "Albums", mediaClickHandler)
    )
}

export default AlbumSidebar