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
                    <button className="navbarButton">Albums</button>
                </Link>
                <Link to="/boards">
                    <button className="navbarButton">Board Games</button>
                </Link>
                <Link to="/books">
                    <button className="navbarButton">Books</button>
                </Link>
                <Link to="/movies">
                    <button className="navbarButton">Movies</button>
                </Link>
                <Link to="/television">
                    <button className="navbarButton">Television</button>
                </Link>
                <Link to="/videos">
                    <button className="navbarButton">Video Games</button>
                </Link>
            </div>
        )
    }
}

export default NavBar
