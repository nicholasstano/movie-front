import SidebarTemplate from './SidebarTemplate.js'

const TVShowSidebar = (props) => {

    const { reviews, mediaClickHandler } = props

    return (
        SidebarTemplate(reviews, "TV Shows", mediaClickHandler)
    )
}

export default TVShowSidebar