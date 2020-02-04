import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'react-dropdown/style.css'

export class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">
                        <button type="button" class="btn btn-outline-dark">onats</button>
                    </Link>
                    <Link className="navbar-brand" to="/movies">
                        <button type="button" class="btn btn-outline-dark">movies</button>
                    </Link>
                    <Link className="navbar-brand" to="/boards">
                        <button type="button" class="btn btn-outline-dark">board games</button>
                    </Link>
                    <Link className="navbar-brand" to="/albums">
                        <button type="button" class="btn btn-outline-dark">albums</button>
                    </Link>
                    <Link className="navbar-brand" to="/videos">
                        <button type="button" class="btn btn-outline-dark">video games</button>
                    </Link>
                    <Link className="navbar-brand" to="/books">
                        <button type="button" class="btn btn-outline-dark">books</button>
                    </Link>
                    <Link className="navbar-brand" to="/television">
                        <button type="button" class="btn btn-outline-dark">television</button>
                    </Link>
                </nav>
            </div>
        )
    }
}

export default NavBar
