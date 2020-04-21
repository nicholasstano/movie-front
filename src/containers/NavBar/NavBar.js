import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'
import MenuIcon from '@material-ui/icons/Menu';

const NavBar = () => {

    const [navOpen, setNavOpen] = useState(false)

    return (
        <div>
            <div className="topNavbar" >
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
        </div>
    )
}

export default NavBar

