import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'react-dropdown/style.css'

export class NavBar extends Component {
    render() {
        return (
            <div className="topNavbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">
                    <button type="button" className="btn-sm btn-light">onats</button>
                </Link>
                <Link className="navbar-brand" to="/albums">
                    <button type="button" className="btn-sm btn-secondary">Albums</button>
                </Link>
                <Link className="navbar-brand" to="/boards">
                    <button type="button" className="btn-sm btn-secondary">Board Games</button>
                </Link>
                <Link className="navbar-brand" to="/books">
                    <button type="button" className="btn-sm btn-secondary">Books</button>
                </Link>
                <Link className="navbar-brand" to="/movies">
                    <button type="button" className="btn-sm btn-secondary">Movies</button>
                </Link>
                <Link className="navbar-brand" to="/television">
                    <button type="button" className="btn-sm btn-secondary">Television</button>
                </Link>
                <Link className="navbar-brand" to="/videos">
                    <button type="button" className="btn-sm btn-secondary">Video Games</button>
                </Link>
            </div>
        )
    }
}

export default NavBar
