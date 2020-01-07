import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'react-dropdown/style.css'

export class NavBar extends Component {
    render() {
        return (
            <div>
                <div className="navbar">
                    <Link className="navbar-link" to="/">onats</Link>
                    <Link className="navbar-link" to="/movies">movies</Link>
                    <Link className="navbar-link" to="/boards">BOARDgames</Link>
                    <Link className="navbar-link" to="/albums">albums</Link>
                    <Link className="navbar-link" to="/videos">VIDEOgames</Link>
                    <Link className="navbar-link" to="/books">books</Link>
                    <Link className="navbar-link" to="/television">TVshows</Link>
                </div>
            </div>
        )
    }
}

export default NavBar
