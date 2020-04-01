import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'react-dropdown/style.css'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

export class NavBar extends Component {

    render() {
        return (
            <div className="topNavbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">
                    <button type="button" className="btn-sm btn-light font-weight-light">Nick Stano</button>
                </Link>
                <Link className="navbar-brand" to="/albums">
                    <button type="button" className="btn-sm btn-album font-weight-light">Albums</button>
                </Link>
                <Link className="navbar-brand" to="/boards">
                    <button type="button" className="btn-sm btn-boardgame font-weight-light">Board Games</button>
                </Link>
                <Link className="navbar-brand" to="/books">
                    <button type="button" className="btn-sm btn-book font-weight-light">Books</button>
                </Link>
                <Link className="navbar-brand" to="/movies">
                    <button type="button" className="btn-sm btn-movie font-weight-light">Movies</button>
                </Link>
                <Link className="navbar-brand" to="/television">
                    <button type="button" className="btn-sm btn-tv font-weight-light" color="purple">Television</button>
                </Link>
                <Link className="navbar-brand" to="/videos">
                    <button type="button" className="btn-sm btn-videogame font-weight-light">Video Games</button>
                </Link>
            </div>
        )
    }
}

export default NavBar
