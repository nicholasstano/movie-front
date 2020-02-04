import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'react-dropdown/style.css'

export class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">
                        <button type="button" className="btn btn-outline-dark">onats</button>
                    </Link>
                    <Link className="navbar-brand" to="/movies">
                        <button type="button" className="btn btn-outline-dark">Movies</button>
                    </Link>
                    <Link className="navbar-brand" to="/boards">
                        <button type="button" className="btn btn-outline-dark">Board Games</button>
                    </Link>
                    <Link className="navbar-brand" to="/albums">
                        <button type="button" className="btn btn-outline-dark">Albums</button>
                    </Link>
                    <Link className="navbar-brand" to="/videos">
                        <button type="button" className="btn btn-outline-dark">Video Games</button>
                    </Link>
                    <Link className="navbar-brand" to="/books">
                        <button type="button" className="btn btn-outline-dark">Books</button>
                    </Link>
                    <Link className="navbar-brand" to="/television">
                        <button type="button" className="btn btn-outline-dark">Television</button>
                    </Link>
                </nav>
            </div>
        )
    }
}

export default NavBar
