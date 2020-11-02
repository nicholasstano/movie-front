import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import HamburgerButtonIcon from '../Sidebar/HamburgerButtonIcon'
import { logout } from '../../components/actions/userActions'
import './navbar.scss'

const NavBar = (props) => {

    const { user } = props.user

    return (
        <header className="navbar">
            <nav className="navbarNavigation">
                <div className="navbarHamburgerIcon">
                    <HamburgerButtonIcon show={props.show} toggleSidebar={props.toggleSidebar}/>
                </div>
                <div className="navbarName">
                    <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                        <p>Nick Stano</p>
                    </Link>
                    {user && Object.keys(user).length > 0 &&
                            <Link to="/" onClick={() => props.logout()}>
                                <p>Log Out</p>
                            </Link>
                    }
                </div>
                <div className="spacer" />
                <div className="navbarNavigationItems">
                    <Link to="/albums" onClick={() => window.scrollTo(0, 0)}>
                        <p>albums</p>
                    </Link>
                    <Link to="/boards" onClick={() => window.scrollTo(0, 0)}>
                        <p>board games</p>
                    </Link>
                    <Link to="/books" onClick={() => window.scrollTo(0, 0)}>
                        <p>books</p>
                    </Link>
                    <Link to="/movies" onClick={() => window.scrollTo(0, 0)}>
                        <p>movies</p>
                    </Link>
                    <Link to="/television" onClick={() => window.scrollTo(0, 0)}>
                        <p>television</p>
                    </Link>
                    <Link to="/videos" onClick={() => window.scrollTo(0, 0)}>
                        <p>video games</p>
                    </Link>
                </div>
            </nav>
        </header >
    )
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, { logout })(NavBar)