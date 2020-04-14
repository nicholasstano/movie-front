import SidebarTemplate from './SidebarTemplate.js'

const BoardGameSidebar = (props) => {

    const { reviews, mediaClickHandler } = props

    return (
        SidebarTemplate(reviews, "Board Games", mediaClickHandler)
    )
}

export default BoardGameSidebar