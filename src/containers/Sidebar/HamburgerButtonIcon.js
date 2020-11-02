import React from 'react'
import './HamburgerButtonIcon.scss'

const HamburgerButtonIcon = (props) => {

    return (
        <button className="toggleButton" onClick={() => props.toggleSidebar()}>
            <div className="buttonLine" />
            <div className="buttonLine" />
            <div className="buttonLine" />
        </button>
    )
}

export default HamburgerButtonIcon
