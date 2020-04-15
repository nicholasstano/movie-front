import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export class NavBar extends Component {

    render() {
        return (
            <div className="topNavbar">
                <Link to="/">
                    <button className="navbarButton">Nick Stano</button>
                </Link>
                <Link to="/albums">
                    <button className="navbarButton albums">Albums</button>
                </Link>
                <Link to="/boards">
                    <button className="navbarButton boardgames">Board Games</button>
                </Link>
                <Link to="/books">
                    <button className="navbarButton books">Books</button>
                </Link>
                <Link to="/movies">
                    <button className="navbarButton movies">Movies</button>
                </Link>
                <Link to="/television">
                    <button className="navbarButton television">Television</button>
                </Link>
                <Link to="/videos">
                    <button className="navbarButton videogames">Video Games</button>
                </Link>
            </div>
        )
    }
}

export default NavBar
