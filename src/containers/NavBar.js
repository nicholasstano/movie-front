import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'react-dropdown/style.css'

export class NavBar extends Component {
    render() {
        return (
            <div>
                <div className="navbar">
                    <Link className="navbar-link" to="/">
                        <button type="button" class="btn btn-outline-success">onats</button>
                    </Link>
                    <Link className="navbar-link" to="/movies">
                        <button type="button" class="btn btn-outline-success">movies</button>
                    </Link>
                    <Link className="navbar-link" to="/boards">
                        <button type="button" class="btn btn-outline-success">board games</button>
                    </Link>
                    <Link className="navbar-link" to="/albums">
                        <button type="button" class="btn btn-outline-success">albums</button>
                    </Link>
                    <Link className="navbar-link" to="/videos">
                        <button type="button" class="btn btn-outline-success">video games</button>
                    </Link>
                    <Link className="navbar-link" to="/books">
                        <button type="button" class="btn btn-outline-success">books</button>
                    </Link>
                    <Link className="navbar-link" to="/television">
                        <button type="button" class="btn btn-outline-success">television</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default NavBar
