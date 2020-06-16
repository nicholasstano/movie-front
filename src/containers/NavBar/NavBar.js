import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'

const NavBar = () => {

    return (
        <div>
            <div className="topNavbar" >
                <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                    <button className="navbarButton">Nick Stano</button>
                </Link>
                <Link to="/albums" onClick={() => window.scrollTo(0, 0)}>
                    <button className="navbarButton albums">Albums</button>
                </Link>
                <Link to="/boards" onClick={() => window.scrollTo(0, 0)}>
                    <button className="navbarButton boardgames">Board Games</button>
                </Link>
                <Link to="/books" onClick={() => window.scrollTo(0, 0)}>
                    <button className="navbarButton books">Books</button>
                </Link>
                <Link to="/movies" onClick={() => window.scrollTo(0, 0)}>
                    <button className="navbarButton movies">Movies</button>
                </Link>
                <Link to="/television" onClick={() => window.scrollTo(0, 0)}>
                    <button className="navbarButton television">Television</button>
                </Link>
                <Link to="/videos" onClick={() => window.scrollTo(0, 0)}>
                    <button className="navbarButton videogames">Video Games</button>
                </Link>
            </div>
        </div>
    )
}

export default NavBar

