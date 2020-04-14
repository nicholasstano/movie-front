import SidebarTemplate from './SidebarTemplate.js'

const MovieSidebar = (props) => {

    const { reviews, mediaClickHandler } = props

    return (
        SidebarTemplate(reviews, "Movies", mediaClickHandler)
    )
}

export default MovieSidebar