import React from 'react'
import './HamburgerButtonIcon.scss'

const HamburgerButtonIcon = (props) => {

    let sidebarClass = "buttonLine"
    if (props.show) {
        sidebarClass = "buttonLine open"
    }

    return (
        <button className="toggleButton" onClick={() => props.toggleSidebar()}>
            <div className={sidebarClass} />
            <div className={sidebarClass} />
            <div className={sidebarClass} />
        </button>
    )
}

export default HamburgerButtonIcon
