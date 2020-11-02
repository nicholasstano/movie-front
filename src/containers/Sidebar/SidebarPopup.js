import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../components/actions/userActions'
import HamburgerButtonIcon from './HamburgerButtonIcon'
import './SidebarPopup.scss'

const SidebarPopup = (props) => {

    const { user } = props.user

    let sidebarClass = "sidebar"
    if (props.show) {
        sidebarClass = "sidebar open"
    }

    return (
        <nav className={sidebarClass}>
            <HamburgerButtonIcon show={props.show} toggleSidebar={props.toggleSidebar}/>
            <Link to="/" onClick={() => {
                props.toggleSidebar()
                window.scrollTo(0, 0)
            }}>
                <p>Nick Stano</p>
            </Link>
            {user && Object.keys(user).length > 0 &&
                    <Link to="/" onClick={() => props.logout()}>
                        <p>Log Out</p>
                    </Link>
            }
            <Link to="/albums" onClick={() => {
                props.toggleSidebar()
                window.scrollTo(0, 0)
            }}>
                <p>albums</p>
            </Link>
            <Link to="/boards" onClick={() => {
                props.toggleSidebar()
                window.scrollTo(0, 0)
            }}>
                <p>board games</p>
            </Link>
            <Link to="/books" onClick={() => {
                props.toggleSidebar()
                window.scrollTo(0, 0)
            }}>
                <p>books</p>
            </Link>
            <Link to="/movies" onClick={() => {
                props.toggleSidebar()
                window.scrollTo(0, 0)
            }}>
                <p>movies</p>
            </Link>
            <Link to="/television" onClick={() => {
                props.toggleSidebar()
                window.scrollTo(0, 0)
            }}>
                <p>television</p>
            </Link>
            <Link to="/videos" onClick={() => {
                props.toggleSidebar()
                window.scrollTo(0, 0)
            }}>
                <p>video games</p>
            </Link>
        </nav>
    )
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, { logout })(SidebarPopup)