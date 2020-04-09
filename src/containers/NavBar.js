import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'react-dropdown/style.css'

export class NavBar extends Component {

    render() {
        return (
            <div className="topNavbar">
                <Link className="navbar-brand" to="/">
                    <button type="button" className="btn-sm btn-light">Nick Stano</button>
                </Link>
                <Link className="navbar-brand" to="/albums">
                    <button type="button" className="btn-sm btn-album">Albums</button>
                </Link>
                <Link className="navbar-brand" to="/boards">
                    <button type="button" className="btn-sm btn-boardgame">Board Games</button>
                </Link>
                <Link className="navbar-brand" to="/books">
                    <button type="button" className="btn-sm btn-book">Books</button>
                </Link>
                <Link className="navbar-brand" to="/movies">
                    <button type="button" className="btn-sm btn-movie">Movies</button>
                </Link>
                <Link className="navbar-brand" to="/television">
                    <button type="button" className="btn-sm btn-tv" color="purple">Television</button>
                </Link>
                <Link className="navbar-brand" to="/videos">
                    <button type="button" className="btn-sm btn-videogame">Video Games</button>
                </Link>
            </div>
        )
    }
}

export default NavBar
