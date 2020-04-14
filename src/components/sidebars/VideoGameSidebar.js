import SidebarTemplate from './SidebarTemplate.js'

const VideoGameSidebar = (props) => {

    const { reviews, mediaClickHandler } = props

    return (
        SidebarTemplate(reviews, "Video Games", mediaClickHandler)
    )
}

export default VideoGameSidebar