import SidebarTemplate from './SidebarTemplate.js'

const BookSidebar = (props) => {

    const { reviews, mediaClickHandler } = props

    return (
        SidebarTemplate(reviews, "Books", mediaClickHandler)
    )
}

export default BookSidebar